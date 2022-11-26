import { useEffect, useState } from "react"
import { push, ref, set } from "firebase/database"

import { useSession } from "../../context/SessionProvider"
import { database } from "../../firebase"
import useProlog from "../../hooks/useProlog"

const Results = () => {
  const [winningHouse, setWinningHouse] = useState("")
  const [userName, setUserName] = useState("")

  const { query } = useProlog()

  const {
    categoryConfigurationList,
    currentCategoryIndex,
    currentQuestionID,
    currentScore,
  } = useSession()

  console.log({
    categoryConfigurationList,
    currentCategoryIndex,
    currentQuestionID,
    currentScore,
  })

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

  const submitButtonHandler = () => {
    if (userName && winningHouse) {
      push(ref(database, "history"), {
        name: userName,
        house: winningHouse,
      })
    }
  }

  return (
    <div className="results">
      <h1>Results</h1>
      <p>Score: {currentScore}</p>
      <p>{winningHouse}</p>
      <form>
        <input
          type="text"
          name=""
          id=""
          onChange={({ target }) => setUserName(target.value)}
          onBlur={({ target }) => setUserName(target.value)}
          value={userName}
        />
        <button type="button" onClick={submitButtonHandler}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Results
