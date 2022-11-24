import { useEffect, useState } from "react"

import { useSession } from "../../context/SessionProvider"
import useProlog from "../../hooks/useProlog"

const Results = () => {
  const [winningHouse, setWinnindHouse] = useState("")

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

      setWinnindHouse(formattedResult)
    })
  }, [currentScore])

  return (
    <div className="results">
      <h1>Results</h1>
      <p>Score: {currentScore}</p>
      <p>{winningHouse}</p>
    </div>
  )
}

export default Results
