import { useEffect } from "react"

import { SET_CURRENT_CATEGORY_INDEX } from "../../constants"
import { useSession, useSessionDispatch } from "../../Context/SessionProvider"
import useProlog from "../../hooks/useProlog"

const DataPersistance = () => {
  const { query } = useProlog()

  const dispatch = useSessionDispatch()
  const { currentCategoryIndex } = useSession()

  useEffect(() => {
    updateValueFromKnowledgeBase()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Queries the value of the currentCategoryIndex 'variable' from the knowledge base and
  // sets it into the store.
  const updateValueFromKnowledgeBase = () => {
    query(`persistance_variable(currentCategoryIndex, R).`, (result) => {
      const formattedResult = Number(result.replace("R = ", ""))

      dispatch({
        type: SET_CURRENT_CATEGORY_INDEX,
        data: formattedResult,
      })
    })
  }

  // Retracts the fact that matches the current value of the currentCategoryIndex 'variable'
  // and then creates a new instance of it with the updated value in the knowledge base.
  // At the end the value is updated in the store by updateValueFromKnowledgeBase.
  const updateFact = (newValue) => {
    query(
      `retract(persistance_variable(currentCategoryIndex, ${currentCategoryIndex})).`,
      () => {
        query(
          `assertz(persistance_variable(currentCategoryIndex, ${newValue})).`,
          () => {
            updateValueFromKnowledgeBase()
          }
        )
      }
    )
  }

  const increaseButtonHandler = () => {
    updateFact(currentCategoryIndex + 1)
  }

  const decreaseButtonHandler = () => {
    updateFact(currentCategoryIndex - 1)
  }

  return (
    <div className="category-index-controls">
      <button
        className="category-index-controls__increase-button"
        onClick={increaseButtonHandler}
      >
        +
      </button>
      <button
        className="category-index-controls__decrease-button"
        onClick={decreaseButtonHandler}
      >
        -
      </button>
      <p className="category-index-controls__value">{currentCategoryIndex}</p>
    </div>
  )
}

export default DataPersistance
