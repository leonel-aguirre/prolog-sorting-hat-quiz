import { useEffect, useState } from "react"

import useProlog from "../../hooks/useProlog"

const QueryResult = ({ queryString }) => {
  const { query } = useProlog()

  const [result, setResult] = useState("")

  useEffect(() => {
    query(queryString, (result) => setResult(result))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [queryString])

  return <h3>{result}</h3>
}

export default QueryResult
