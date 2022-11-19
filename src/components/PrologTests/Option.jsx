import { useEffect, useState } from "react"
import { useProlog } from "../../hooks/useProlog"

const Option = ({ optionID }) => {
  const { query, normalizeString } = useProlog()

  const [option, setOption] = useState("")

  useEffect(() => {
    const fetchOption = async () => {
      const queryResult = await query(`option(${optionID}, X).`)

      setOption(normalizeString(queryResult?.X))
    }

    fetchOption()
  })

  return <h3>{option}</h3>
}

export default Option
