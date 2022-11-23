import { useEffect, useState } from "react"

import {
  SET_CATEGORY_CONFIGURATION_LIST,
  SET_CURRENT_CATEGORY_INDEX,
  SET_CURRENT_QUESTION_ID,
} from "../../constants"
import { useSession } from "../../Context/SessionProvider"
import useProlog from "../../hooks/useProlog"
import Question from "./Question/Question"

const Quiz = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState("")
  const [currentOptionsIDS, setCurrentOptionsIDs] = useState([])

  const {
    query,
    updatePersistanceVariable,
    updateStoreValueFromKnowledgeBase,
  } = useProlog()

  const { categoryConfigurationList, currentCategoryIndex, currentQuestionID } =
    useSession()

  // Updates the store with the initial values from the knowledge base.
  useEffect(() => {
    updateStoreValueFromKnowledgeBase(
      "categoryConfigurationList",
      SET_CATEGORY_CONFIGURATION_LIST
    )

    updateStoreValueFromKnowledgeBase(
      "currentCategoryIndex",
      SET_CURRENT_CATEGORY_INDEX
    )

    updateStoreValueFromKnowledgeBase(
      "currentQuestionID",
      SET_CURRENT_QUESTION_ID
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Generates a new category order list and updates both store and knowledge base.
  useEffect(() => {
    query(`create_category_order_list(L).`, (result) => {
      const formattedResult = result.replace("L = ", "")

      updatePersistanceVariable(
        "categoryConfigurationList",
        categoryConfigurationList,
        formattedResult,
        SET_CATEGORY_CONFIGURATION_LIST
      )
    })

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
      <pre>
        <code>
          {JSON.stringify(
            {
              categoryConfigurationList: JSON.parse(categoryConfigurationList),
              currentCategoryIndex,
              currentQuestionID,
            },
            null,
            2
          )}
        </code>
      </pre>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Question question={currentQuestion} optionIDs={currentOptionsIDS} />
      )}
    </div>
  )
}

export default Quiz
