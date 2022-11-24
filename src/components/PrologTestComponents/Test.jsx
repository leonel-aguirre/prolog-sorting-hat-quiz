import { useSession } from "../../context/SessionProvider"

const Test = () => {
  const { session } = useSession()

  session.query("question(q1, R).", {
    success: () => {
      session.answer({
        success: (answer) => {
          // const formattedAnswer = session.format_answer(answer)

          // console.log({ formattedAnswer })

          console.log(answer.lookup("R").toJavaScript().join(""))
        },
        error: (error) => {
          throw Error(`Error: ${error}`)
        },
        fail: (error) => {
          throw Error(`Error: ${error}`)
        },
        limit: () => {
          throw Error("Error: Limit")
        },
      })
    },
    error: (error) => {
      throw Error(`Error: ${error}`)
    },
  })

  return <h1>Test</h1>
}

export default Test
