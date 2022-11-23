import { useEffect, useState } from "react"

import { SET_CATEGORY_CONFIGURATION_LIST } from "../../constants"
import { useSession, useSessionDispatch } from "../../Context/SessionProvider"
import useProlog from "../../hooks/useProlog"

const Quiz = () => {
  const [isLoadingCategoryOrderList, setIsLoadingCategoryOrderList] =
    useState(true)
  const { query } = useProlog()
  const dispatch = useSessionDispatch()
  const { categoryConfigurationList } = useSession()

  // Updates the store with the initial value from the knowledge base.
  useEffect(() => {
    updateValueFromKnowledgeBase()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Generates a new category order list and passes it into updateFact.
  useEffect(() => {
    query(`create_category_order_list(L).`, (result) => {
      const formattedResult = result.replace("L = ", "")

      updateFact(formattedResult)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Queries the value of the categoryConfigurationList 'variable' from the knowledge base and
  // sets it into the store.
  const updateValueFromKnowledgeBase = () => {
    query(`persistance_variable(categoryConfigurationList, R).`, (result) => {
      const formattedResult = result.replace("R = ", "")

      dispatch({
        type: SET_CATEGORY_CONFIGURATION_LIST,
        data: formattedResult,
      })
    })
  }

  // Retracts the fact that matches the current value of the categoryConfigurationList 'variable'
  // and then creates a new instance of it with the updated value in the knowledge base.
  // At the end the value is updated in the store by updateValueFromKnowledgeBase.
  const updateFact = (newValue) => {
    query(
      `retract(persistance_variable(categoryConfigurationList, ${categoryConfigurationList})).`,
      () => {
        query(
          `assertz(persistance_variable(categoryConfigurationList, ${newValue})).`,
          () => {
            updateValueFromKnowledgeBase()

            // Emulate a minimal waiting period.
            setTimeout(() => setIsLoadingCategoryOrderList(false), 1000)
          }
        )
      }
    )
  }

  return (
    <div className="quiz">
      <pre>
        <code>{categoryConfigurationList}</code>
      </pre>
      {isLoadingCategoryOrderList ? <h1>Loading...</h1> : <h1>QUIZ</h1>}
    </div>
  )
}

export default Quiz
