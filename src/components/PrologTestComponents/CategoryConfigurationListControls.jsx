import { useEffect } from "react"

import { SET_CATEGORY_CONFIGURATION_LIST } from "../../constants"
import { useSession, useSessionDispatch } from "../../Context/SessionProvider"
import useProlog from "../../hooks/useProlog"

const CategoryConfigurationListControls = () => {
  const { query } = useProlog()

  const dispatch = useSessionDispatch()
  const { categoryConfigurationList } = useSession()

  useEffect(() => {
    updateValueFromKnowledgeBase()

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
          }
        )
      }
    )
  }

  // Generates a new category order list and passes it into updateFact.
  const newConfigurationListButtonHandler = () => {
    query(`create_category_order_list(L).`, (result) => {
      const formattedResult = result.replace("L = ", "")

      updateFact(formattedResult)
    })
  }

  return (
    <div className="category-configuration-list-controls">
      <button
        className="category-configuration-list-controls__new-configuration-list"
        onClick={newConfigurationListButtonHandler}
      >
        New Configuration List
      </button>
    </div>
  )
}

export default CategoryConfigurationListControls
