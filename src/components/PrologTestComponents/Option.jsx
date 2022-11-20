import { useEffect, useState } from "react"

import useProlog from "../../hooks/useProlog"

const Option = ({ optionID }) => {
  const { query } = useProlog()

  const [option, setOption] = useState("")

  useEffect(() => {
    query(`option(${optionID}, X).`, setOption)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionID])

  return <h3>{option}</h3>
}

export default Option
