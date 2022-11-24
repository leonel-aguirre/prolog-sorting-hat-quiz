import "./Question.scss"

import OptionSelector from "./OptionSelector/OptionSelector"

const Question = ({ question, optionIDs }) => {
  return (
    <div className="question">
      <div className="question__question-container">
        <h3 className="question__question-text">{question}</h3>
      </div>

      <div className="question__options-container">
        <OptionSelector optionIDs={optionIDs} />
      </div>
    </div>
  )
}

export default Question
