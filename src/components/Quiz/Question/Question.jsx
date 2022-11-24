import { SET_CURRENT_CATEGORY_INDEX } from "../../../constants"
import { useSession } from "../../../context/SessionProvider"
import useProlog from "../../../hooks/useProlog"
import Option from "./Option/Option"

const Question = ({ question, optionIDs }) => {
  const { updatePersistanceVariable } = useProlog()

  const { currentCategoryIndex } = useSession()

  const selectOptionButtonHandler = () => {
    updatePersistanceVariable(
      "currentCategoryIndex",
      currentCategoryIndex,
      currentCategoryIndex + 1,
      SET_CURRENT_CATEGORY_INDEX
    )
  }

  return (
    <div className="question">
      <h3 className="question__question-text">{question}</h3>
      <ul className="question__options-list">
        {optionIDs.map((optionID) => (
          <li key={optionID} className="question__option">
            <Option optionID={optionID} />
            <button
              className="question__option-button"
              onClick={selectOptionButtonHandler}
            >
              Select
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
