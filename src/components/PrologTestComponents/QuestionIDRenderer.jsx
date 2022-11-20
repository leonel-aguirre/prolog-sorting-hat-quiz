import { useSession } from "../../Context/SessionProvider"

const QuestionIDRenderer = ({ instanceID }) => {
  const { currentQuestionID } = useSession()

  return (
    <div className="question-id-renderer">
      <h4 className="question-id-renderer__title">Instance {instanceID}:</h4>
      <p className="question-id-renderer__value">{currentQuestionID}</p>
    </div>
  )
}

export default QuestionIDRenderer
