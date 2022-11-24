import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_SCORE,
} from "../../../constants"
import { useSession } from "../../../context/SessionProvider"
import useProlog from "../../../hooks/useProlog"
import Option from "./Option/Option"

const Question = ({ question, optionIDs }) => {
  const { query, updatePersistanceVariable } = useProlog()

  const { currentCategoryIndex, currentScore } = useSession()

  // Updates the current category index so that the UI moves to the
  // next question, also fetches the weight of the selected option
  // and sums it to the current score.
  const selectOptionButtonHandler = (optionID) => {
    updatePersistanceVariable(
      "currentCategoryIndex",
      currentCategoryIndex,
      currentCategoryIndex + 1,
      SET_CURRENT_CATEGORY_INDEX
    )

    query(`get_option_id_normalized_weights(${optionID}, W).`, (result) => {
      const weights = JSON.parse(result.replace("W = ", ""))

      // Maintains score values as values between 0 and 1 that altogether sum up to 1.
      const newScore = weights
        .map((weight, index) => weight + JSON.parse(currentScore)[index])
        .map(
          (weight, _, weights) => weight / weights.reduce((a, b) => a + b, 0)
        )

      updatePersistanceVariable(
        "currentScore",
        currentScore,
        JSON.stringify(newScore),
        SET_CURRENT_SCORE
      )
    })
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
              onClick={() => selectOptionButtonHandler(optionID)}
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
