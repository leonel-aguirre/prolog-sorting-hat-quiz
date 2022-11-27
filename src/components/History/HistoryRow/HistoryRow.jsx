import "./HistoryRow.scss"

import LionIcon from "../../../assets/lion-icon.png"
import CrowIcon from "../../../assets/crow-icon.png"
import BadgerIcon from "../../../assets/badger-icon.png"
import SnakeIcon from "../../../assets/snake-icon.png"

const HistoryRow = ({ id, name, house }) => {
  const houseClass = `is-${house.toLowerCase()}`

  const houseAnimalIconMap = {
    Gryffindor: LionIcon,
    Ravenclaw: CrowIcon,
    Hufflepuff: BadgerIcon,
    Slytherin: SnakeIcon,
  }

  return (
    <>
      <p className="history-row__id">{id}</p>
      <p className="history-row__name">{name}</p>
      <p className={`history-row__house ${houseClass}`}>{house}</p>
      <div className={`history-row__animal ${houseClass}`}>
        <img
          className="history-row__animal-img"
          src={houseAnimalIconMap[house]}
          alt={`${house} icon`}
        />
      </div>
    </>
  )
}

export default HistoryRow
