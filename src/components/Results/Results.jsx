import { useSession } from "../../Context/SessionProvider"

const Results = () => {
  const { categoryConfigurationList, currentCategoryIndex, currentQuestionID } =
    useSession()

  console.log({
    categoryConfigurationList,
    currentCategoryIndex,
    currentQuestionID,
  })

  return (
    <div className="results">
      <h1>Results</h1>
    </div>
  )
}

export default Results
