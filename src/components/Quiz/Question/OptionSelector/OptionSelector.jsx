import "./OptionSelector.scss"

import { useEffect, useState } from "react"

import {
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_SCORE,
} from "../../../../constants"
import GlowButton from "../../../CoreUI/GlowButton/GlowButton"
import useProlog from "../../../../hooks/useProlog"
import { useSession } from "../../../../context/SessionProvider"

const OptionSelector = ({ optionIDs }) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState(0)
  const [currentOptionText, setCurrentOptionText] = useState("")

  const { query, updatePersistanceVariable } = useProlog()
  const { currentCategoryIndex, currentScore } = useSession()

  const isFirstIndex = currentOptionIndex === 0
  const isLastIndex = currentOptionIndex === optionIDs.length - 1

  useEffect(() => {
    query(`option(${optionIDs[currentOptionIndex]}, O).`, (result) => {
      const optionText = result
        .replaceAll(",,", ",~")
        .replaceAll(/\[|\]|,|O = /g, "")
        .replaceAll("~", ",")

      setCurrentOptionText(optionText)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentOptionIndex])

  // Updates the current category index so that the UI moves to the
  // next question, also fetches the weight of the selected option
  // and sums it to the current score.
  const selectButtonHandler = (optionID) => {
    updatePersistanceVariable(
      "currentCategoryIndex",
      currentCategoryIndex,
      currentCategoryIndex + 1,
      SET_CURRENT_CATEGORY_INDEX
    )

    query(
      `get_option_id_normalized_weights(${optionIDs[currentOptionIndex]}, W).`,
      (result) => {
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
      }
    )
  }

  const previousOptionButtonHandler = () => {
    if (!isFirstIndex) {
      setCurrentOptionIndex(currentOptionIndex - 1)
    }
  }

  const nextOptionButtonHandler = () => {
    if (!isLastIndex) {
      setCurrentOptionIndex(currentOptionIndex + 1)
    }
  }

  return (
    <div className="option-selector">
      <div className="option-selector__button-container">
        {!isFirstIndex && (
          <button
            className="option-selector__previous-option-button"
            onClick={previousOptionButtonHandler}
          >
            {"<"}
          </button>
        )}
      </div>
      <div className="option-selector__option-text-container">
        <h2 className="option-selector__option-text">{currentOptionText}</h2>
        <GlowButton
          className="option-selector__select-button"
          isSmall={true}
          onClick={selectButtonHandler}
        >
          Select
        </GlowButton>
      </div>

      <div className="option-selector__button-container">
        {!isLastIndex && (
          <button
            className="option-selector__next-option-button"
            onClick={nextOptionButtonHandler}
          >
            {">"}
          </button>
        )}
      </div>
    </div>
  )
}

export default OptionSelector
