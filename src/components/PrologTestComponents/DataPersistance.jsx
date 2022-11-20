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

  // Queries the value of the accumulator 'variable' from the knowledge base and
  // sets it into the store.
  const updateValueFromKnowledgeBase = () => {
    query(`persistance_variable(accumulator, R).`, (result) => {
      const formattedResult = Number(result.replace("R = ", ""))

      dispatch({
        type: SET_CURRENT_CATEGORY_INDEX,
        data: formattedResult,
      })
    })
  }

  // Retracts the fact that matches the current value of the accumulator 'variable'
  // and then creates a new instance of it with the updated value in the knowledge base.
  // At the end the value is updated in the store by updateValueFromKnowledgeBase.
  const updateFact = (newValue) => {
    query(
      `retract(persistance_variable(accumulator, ${currentCategoryIndex})).`,
      () => {
        query(
          `assertz(persistance_variable(accumulator, ${newValue})).`,
          () => {
            updateValueFromKnowledgeBase()
          }
        )
      }
    )
  }

  const increaseButtonOnClickHandle = () => {
    updateFact(currentCategoryIndex + 1)
  }

  const decreaseButtonOnClickHandle = () => {
    updateFact(currentCategoryIndex - 1)
  }

  return (
    <div className="data-persistance">
      <button
        className="data-persistance__increase-button"
        onClick={increaseButtonOnClickHandle}
      >
        +
      </button>
      <button
        className="data-persistance__decrease-button"
        onClick={decreaseButtonOnClickHandle}
      >
        -
      </button>
      <p className="data-persistance__value">{currentCategoryIndex}</p>
    </div>
  )
}

export default DataPersistance
