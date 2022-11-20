import "./App.scss"

import { SessionProvider } from "../Context/SessionProvider"
import Question from "./PrologTestComponents/Question"
import Option from "./PrologTestComponents/Option"
import QueryResult from "./PrologTestComponents/QueryResult"
import PrologSessionWrapper from "../Context/PrologSessionWrapper"
import DataPersistance from "./PrologTestComponents/DataPersistance"
import CategoryIndexRenderer from "./PrologTestComponents/CategoryIndexRendered"

const App = () => {
  return (
    <SessionProvider>
      <PrologSessionWrapper>
        <div className="app">
          <h1 className="app__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
            veritatis eos id minima est. Nisi vitae dignissimos voluptatum atque
            autem? Distinctio eligendi quasi possimus, totam sit dolore laborum
            at. Atque!
          </h1>

          <div className="app__prolog-test-container">
            <Question questionID={"q1"} />
            <Option optionID={"o1"} />
            <Option optionID={"o2"} />
            <hr />
            <QueryResult queryString={"permutation([1,2,3,4], L)."} />
            <QueryResult queryString={"random_permutation([1,2,3,4], L)."} />
            <QueryResult queryString={"create_category_order_list(L)."} />
            <hr />
            <DataPersistance />
            <CategoryIndexRenderer instanceID={"A"} />
            <CategoryIndexRenderer instanceID={"B"} />
          </div>
        </div>
      </PrologSessionWrapper>
    </SessionProvider>
  )
}

export default App
