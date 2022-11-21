import CategoryConfigurationListControls from "./CategoryConfigurationListControls"
import CategoryConfigurationListRenderer from "./CategoryConfigurationListRenderer"
import CategoryIndexControls from "./CategoryIndexControls"
import CategoryIndexRenderer from "./CategoryIndexRendered"
import Option from "./Option"
import QueryResult from "./QueryResult"
import Question from "./Question"
import QuestionIDControls from "./QuestionIDControls"
import QuestionIDRenderer from "./QuestionIDRenderer"
import Test from "./Test"

const Sandbox = () => {
  return (
    <div className="sandbox">
      <Question questionID={"q1"} />
      <Option optionID={"o1"} />
      <Option optionID={"o2"} />
      <hr />
      <QueryResult queryString={"permutation([1,2,3,4], L)."} />
      <QueryResult queryString={"random_permutation([1,2,3,4], L)."} />
      <QueryResult queryString={"create_category_order_list(L)."} />
      <hr />
      <CategoryIndexControls />
      <CategoryIndexRenderer instanceID={"A"} />
      <CategoryIndexRenderer instanceID={"B"} />
      <hr />
      <QuestionIDControls />
      <QuestionIDRenderer instanceID={"A"} />
      <QuestionIDRenderer instanceID={"B"} />
      <hr />
      <CategoryConfigurationListControls />
      <CategoryConfigurationListRenderer instanceID={"A"} />
      <CategoryConfigurationListRenderer instanceID={"B"} />
      <hr />
      <Test />
    </div>
  )
}

export default Sandbox
