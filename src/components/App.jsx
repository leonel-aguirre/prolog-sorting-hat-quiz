import "./App.scss"

import { SessionProvider } from "../Context/SessionProvider"
import Question from "./PrologTests/Question"
import Option from "./PrologTests/Option"

const App = () => {
  return (
    <SessionProvider>
      <div className="app">
        <h1 className="app__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et veritatis
          eos id minima est. Nisi vitae dignissimos voluptatum atque autem?
          Distinctio eligendi quasi possimus, totam sit dolore laborum at.
          Atque!
        </h1>

        <div className="app__prolog-test-container">
          <Question questionID={"q1"} />
          <Option optionID={"o1"} />
          <Option optionID={"o2"} />
        </div>
      </div>
    </SessionProvider>
  )
}

export default App
