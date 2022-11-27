import "./Results.scss"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { push, ref } from "firebase/database"

import { GRYFFINDOR, HUFFLEPUFF, RAVENCLAW, SLYTHERIN } from "../../constants"
import { useSession } from "../../context/SessionProvider"
import { database } from "../../firebase"
import GlowButton from "../CoreUI/GlowButton/GlowButton"
import Modal from "../CoreUI/Modal/Modal"
import useProlog from "../../hooks/useProlog"

const Results = () => {
  const [winningHouse, setWinningHouse] = useState("")
  const [userName, setUserName] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [shouldShowResults, setShouldShowResults] = useState(false)

  const { query } = useProlog()
  const { currentScore } = useSession()
  const navigate = useNavigate()

  useEffect(() => {
    query(`determine_house(${currentScore}, H).`, (result) => {
      const formattedResult = result
        .replaceAll(",,", ",~")
        .replaceAll(/\[|\]|,|H = /g, "")
        .replaceAll("~", ",")

      setWinningHouse(formattedResult)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScore])

  const submitButtonHandler = async () => {
    if (userName && winningHouse) {
      await push(ref(database, "history"), {
        name: userName,
        house: winningHouse,
      })

      navigate("/history")
    }
  }

  const renderPreResultsUI = () => {
    return (
      <div className="results__pre-results-container">
        <h1 className="results__results-ready-title">
          Your results are ready!
        </h1>
        <p className="results__reveal-house-text">
          Click the button below to reveal the house you belong to...
        </p>
        <div className="results__button-container">
          <GlowButton onClick={() => setShouldShowResults(true)}>
            Show Results
          </GlowButton>
        </div>
      </div>
    )
  }

  const renderResults = () => {
    let buttonColor = ""

    switch (winningHouse.toUpperCase()) {
      case GRYFFINDOR:
        buttonColor = GlowButton.RED
        break
      case RAVENCLAW:
        buttonColor = GlowButton.BLUE
        break
      case HUFFLEPUFF:
        buttonColor = GlowButton.YELLOW
        break
      case SLYTHERIN:
        buttonColor = GlowButton.GREEN
        break
      default:
        buttonColor = GlowButton.PURPLE
    }

    return (
      <div className="results__house-results-container">
        <h3 className="results__you-belong-to-text">You belong to...</h3>
        <h1
          className={`results__winning-house-text is-${winningHouse.toLowerCase()}`}
        >
          {winningHouse}
        </h1>
        <p className="results__want-to-submit-text">
          Do you want to submit your results?
        </p>
        <div className="results__buttons-container">
          <GlowButton
            color={buttonColor}
            onClick={() => {
              setIsModalOpen(true)
            }}
          >
            Submit
          </GlowButton>
          <GlowButton
            color={buttonColor}
            onClick={() => {
              navigate("/")
            }}
          >
            Back to Home
          </GlowButton>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`results ${
        shouldShowResults ? `is-${winningHouse.toLowerCase()}` : ""
      }`}
    >
      <div className="results__container">
        {shouldShowResults ? renderResults() : renderPreResultsUI()}
      </div>

      <Modal isOpen={isModalOpen}>
        <div className="results__results-form-modal">
          <div className="results__modal-title-and-cancel-container">
            <h4 className="results__submit-your-results-text">
              Submit your results
            </h4>
            <button
              className="results__modal-close-button"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>

          <form className="results__submit-results-form">
            <input
              type="text"
              placeholder="Type in your name here"
              className="results__user-name-input"
              onChange={({ target }) => setUserName(target.value)}
              onBlur={({ target }) => setUserName(target.value)}
              value={userName}
            />
            <GlowButton
              isSmall={true}
              type="button"
              onClick={submitButtonHandler}
            >
              Send
            </GlowButton>
          </form>
        </div>
      </Modal>
    </div>
  )
}

export default Results
