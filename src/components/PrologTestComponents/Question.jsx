import { useEffect, useState } from "react"

import useProlog from "../../hooks/useProlog"

const Question = ({ questionID }) => {
  const { query } = useProlog()

  const [question, setQuestion] = useState("")

  useEffect(() => {
    query(`question(${questionID}, X).`, setQuestion)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionID])

  return <h2>{question}</h2>
}

export default Question
