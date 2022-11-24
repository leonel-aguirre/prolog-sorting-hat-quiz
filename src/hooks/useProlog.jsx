import { useSession, useSessionDispatch } from "../context/SessionProvider"

const useProlog = () => {
  const { session } = useSession()
  const dispatch = useSessionDispatch()

  /**
   * Performs a query against the current session.
   *
   * @param {String} queryString The string containing the query to be made.
   * @param {Function} callback A callback executed once the query is made.
   */
  const query = (queryString, callback) => {
    if (session) {
      session.query(queryString, {
        success: () => {
          session.answer({
            success: (answer) => {
              const formattedAnswer = session.format_answer(answer)

              callback?.(formattedAnswer)
            },
            error: (error) => {
              throw Error(`Error: ${error}`)
            },
            fail: (error) => {
              throw Error(`Error: ${error}`)
            },
            limit: () => {
              throw Error("Error: Limit")
            },
          })
        },
        error: (error) => {
          throw Error(`Error: ${error}`)
        },
      })
    }
  }

  /**
   * Retracts the fact that matches the current value of the persistance variable
   * and then creates a new instance of it with the updated value in the knowledge base.
   * At the end the value is updated in the store by updateStoreValueFromKnowledgeBase.
   *
   * @param {String} name The name of the persistance variable.
   * @param {String} currentValue The current value of the persistance variable.
   * @param {String} newValue The new value to be assigned to the persistance variable.
   * @param {String} actionType The type identifier of the action to be performed to update the store.
   * @param {Function} callback A callback that is executed after the variable update.
   */
  const updatePersistanceVariable = (
    name,
    currentValue,
    newValue,
    actionType,
    callback
  ) => {
    query(`retract(persistance_variable(${name}, ${currentValue})).`, () => {
      query(`assertz(persistance_variable(${name}, ${newValue})).`, () => {
        updateStoreValueFromKnowledgeBase(name, actionType)
        callback?.()
      })
    })
  }

  /**
   * Queries the value of the persistance variable from the knowledge base and
   * sets it into the store.
   *
   * @param {String} name The name of the persistance variable form the knowledge base.
   * @param {String} actionType The type identifier of the action to be performed to update the store.
   */
  const updateStoreValueFromKnowledgeBase = (name, actionType) => {
    query(`persistance_variable(${name}, R).`, (result) => {
      const formattedResult = result.replace("R = ", "")

      dispatch({
        type: actionType,
        data: formattedResult,
      })
    })
  }

  return {
    session,
    query,
    updatePersistanceVariable,
    updateStoreValueFromKnowledgeBase,
  }
}

export default useProlog
