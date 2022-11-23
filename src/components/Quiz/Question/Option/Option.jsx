import { useEffect, useState } from "react"

import useProlog from "../../../../hooks/useProlog"

const Option = ({ optionID }) => {
  const { query } = useProlog()

  const [optionText, setOptionText] = useState()

  // Fetches the text tied to the optionID in the knowledge base and
  // sets is into the state of the component.
  useEffect(() => {
    query(`option(${optionID}, O).`, (result) => {
      const option = result
        .replaceAll(",,", ",~")
        .replaceAll(/\[|\]|,|O = /g, "")
        .replaceAll("~", ",")

      setOptionText(option)
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="option">
      <p>{optionText}</p>
    </div>
  )
}

export default Option
