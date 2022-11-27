import "./History.scss"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { onValue, ref } from "firebase/database"

import { database } from "../../firebase"
import HistoryRow from "./HistoryRow/HistoryRow"
import GlowButton from "../CoreUI/GlowButton/GlowButton"

const History = () => {
  const [historyData, setHistoryData] = useState({})
  const navigate = useNavigate()

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
      return (
        <div className="history__results-grid">
          <p className="history__results-grid-heading is-id">ID</p>
          <p className="history__results-grid-heading is-name">NAME</p>
          <p className="history__results-grid-heading is-house">HOUSE</p>
          <p className="history__results-grid-heading is-animal"></p>
          <div className="history__results-grid-divider" />
          {Object.keys(historyData).map((key, index) => {
            const { name, house } = historyData[key]

            return (
              <HistoryRow key={key} id={index + 1} name={name} house={house} />
            )
          })}
        </div>
      )
    } else {
      return <h1>Oops! Looks like this is empty 😹</h1>
    }
  }

  return (
    <div className="history">
      <div className="history__container">
        <h1 className="history__title">History</h1>
        <p className="history__description">
          Here are all the submitted results by users:
        </p>
        {renderResults()}
        <div className="history__button-container">
          <GlowButton onClick={() => navigate("/")}>Back to Home</GlowButton>
        </div>
      </div>
    </div>
  )
}
export default History
