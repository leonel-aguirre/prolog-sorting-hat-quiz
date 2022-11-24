import { useEffect } from "react"

import { SET_CURRENT_QUESTION_ID } from "../../constants"
import { useSession, useSessionDispatch } from "../../context/SessionProvider"
import useProlog from "../../hooks/useProlog"

const QuestionIDControls = () => {
  const { query } = useProlog()

  const dispatch = useSessionDispatch()
  const { currentQuestionID } = useSession()

  useEffect(() => {
    updateValueFromKnowledgeBase()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Queries the value of the currentQuestionID 'variable' from the knowledge base and
  // sets it into the store.
  const updateValueFromKnowledgeBase = () => {
    query(`persistance_variable(currentQuestionID, R).`, (result) => {
      const formattedResult = result.replace("R = ", "")

      dispatch({
        type: SET_CURRENT_QUESTION_ID,
        data: formattedResult,
      })
    })
  }

  // Retracts the fact that matches the current value of the currentQuestionID 'variable'
  // and then creates a new instance of it with the updated value in the knowledge base.
  // At the end the value is updated in the store by updateValueFromKnowledgeBase.
  const updateFact = (newValue) => {
    query(
      `retract(persistance_variable(currentQuestionID, ${currentQuestionID})).`,
      () => {
        query(
          `assertz(persistance_variable(currentQuestionID, ${newValue})).`,
          () => {
            updateValueFromKnowledgeBase()
          }
        )
      }
    )
  }

  const nextQuestionIDButtonHandler = () => {
    const nextQuestionIDNumber = Number(currentQuestionID.replace("q", "")) + 1

    updateFact(`q${nextQuestionIDNumber}`)
  }

  return (
    <div className="question-id-controls">
      <button
        className="question-id-controls__increase-button"
        onClick={nextQuestionIDButtonHandler}
      >
        Next Question ID
      </button>
    </div>
  )
}

export default QuestionIDControls
