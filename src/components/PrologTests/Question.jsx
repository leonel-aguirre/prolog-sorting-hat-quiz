import { useEffect, useState } from "react"
import { useProlog } from "../../hooks/useProlog"

const Question = ({ questionID }) => {
  const { query, normalizeString } = useProlog()

  const [question, setQuestion] = useState("")

  useEffect(() => {
    const fetchQuestion = async () => {
      const queryResult = await query(`question(${questionID}, X).`)

      setQuestion(normalizeString(queryResult?.X))
    }

    fetchQuestion()
  })

  return <h2>{question}</h2>
}

export default Question
