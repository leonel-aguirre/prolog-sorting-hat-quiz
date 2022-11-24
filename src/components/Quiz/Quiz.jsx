import "./Quiz.scss"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  SET_CATEGORY_CONFIGURATION_LIST,
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_QUESTION_ID,
} from "../../constants"
import { useSession } from "../../context/SessionProvider"
import useProlog from "../../hooks/useProlog"
import Question from "./Question/Question"

const Quiz = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [currentOptionsIDS, setCurrentOptionsIDs] = useState([])
  const navigate = useNavigate()

  const { query, updatePersistanceVariable } = useProlog()

  // TODO: Remove when no longer needed.
  const shouldShowDebugInformation = false

  const {
    categoryConfigurationList,
    currentCategoryIndex,
    currentQuestionID,
    currentScore,
  } = useSession()

  useEffect(() => {
    if (currentCategoryIndex > 7) {
      navigate("/results")
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryIndex])

  // Sets currentCategoryIndex to 0 and then generates a new category order list,
  // both values are stored in knowledge base and store.
  useEffect(() => {
    updatePersistanceVariable(
      "currentCategoryIndex",
      currentCategoryIndex,
      0,
      SET_CURRENT_CATEGORY_INDEX,
      () => {
        query(`create_category_order_list(L).`, (result) => {
          const formattedResult = result.replace("L = ", "")

          updatePersistanceVariable(
            "categoryConfigurationList",
            categoryConfigurationList,
            formattedResult,
            SET_CATEGORY_CONFIGURATION_LIST
          )
        })
      }
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Whenever currentCategoryIndex is updated, a new question ID is generated
  // randomly based on the current category possible questions.
  useEffect(() => {
    setIsLoading(true)

    const categoryID = JSON.parse(categoryConfigurationList)[
      currentCategoryIndex
    ]

    query(
      `random_question_id_from_category(c${categoryID}, Q_ID).`,
      (result) => {
        const questionID = result.replace("Q_ID = ", "")

        updatePersistanceVariable(
          "currentQuestionID",
          currentQuestionID,
          questionID,
          SET_CURRENT_QUESTION_ID
        )
      }
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategoryIndex])

  // Whenever currentQuestionID is updated, the question options of
  // it are fetched and set into stat.
  useEffect(() => {
    query(`question(${currentQuestionID}, Q).`, (result) => {
      const question = result
        .replaceAll(",,", ",~")
        .replaceAll(/\[|\]|,|Q = /g, "")
        .replaceAll("~", ",")

      setCurrentQuestion(question)

      query(`question_options(${currentQuestionID}, O_List).`, (result) => {
        const optionsIDs = result
          .replace("O_List = ", "")
          .replaceAll(/\[|\]/g, "")
          .split(",")

        setCurrentOptionsIDs(optionsIDs)

        // Emulate a minimal waiting period.
        setTimeout(() => setIsLoading(false), 1000)
      })
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestionID])

  return (
    <div className="quiz">
      {shouldShowDebugInformation && (
        <pre>
          <code>
            {JSON.stringify(
              {
                categoryConfigurationList: JSON.parse(
                  categoryConfigurationList
                ),
                currentScore: JSON.parse(currentScore),
                currentCategoryIndex,
                currentQuestionID,
              },
              null,
              2
            )}
          </code>
        </pre>
      )}
      {isLoading ? (
        <h1 className="quiz__loader">Loading ...</h1>
      ) : (
        <Question question={currentQuestion} optionIDs={currentOptionsIDS} />
      )}
    </div>
  )
}

export default Quiz
