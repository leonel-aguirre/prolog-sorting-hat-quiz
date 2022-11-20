import { useSession } from "../Context/SessionProvider"

const useProlog = () => {
  const { session } = useSession()

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

  return {
    session,
    query,
  }
}

export default useProlog
