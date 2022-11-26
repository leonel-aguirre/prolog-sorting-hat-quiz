import { useEffect, useState } from "react"
import { onValue, ref } from "firebase/database"

import { database } from "../../firebase"

const History = () => {
  const [historyData, setHistoryData] = useState({})

  useEffect(() => {
    onValue(ref(database, "history"), (snapshot) => {
      const data = snapshot.val()

      if (data) {
        setHistoryData(data)
      }
    })
  }, [])

  const renderResults = () => {
    if (Object.keys(historyData).length > 0) {
    } else {
      return <h1>Oops! Looks like this is empty 😹</h1>
    }
  }

  return (
    <div className="history">
      <h1>History</h1>
      <pre>
        <code>{JSON.stringify(historyData, null, 2)}</code>
      </pre>
      {renderResults()}
    </div>
  )
}
export default History
