import "./Home.scss"

import { useNavigate } from "react-router-dom"

import GlowButton from "../CoreUI/GlowButton/GlowButton"

const Home = () => {
  const navigate = useNavigate()

  const startHereButtonHandler = () => {
    navigate("/quiz")
  }

  const historyButtonHandler = () => {
    navigate("/history")
  }

  return (
    <div className="home">
      <div className="home__content-wrapper">
        <div className="home__heading-wrapper">
          <h1 className="home__heading-1">
            <span className="home__prolog-text">Prolog</span> +{" "}
            <span className="home__react-text">React</span>
          </h1>
          <h2 className="home__heading-2">Hogwarts Sorting Hat Quiz</h2>
        </div>

        <p className="home__description">
          A re-implementation of the known Hogwarts Sorting Hat Quiz from the{" "}
          <a href="https://www.wizardingworld.com">Wizarding World site</a>{" "}
          using Prolog, React and the data provided from the Reddit user{" "}
          <a href="https://www.reddit.com/user/N1ffler">N1ffler</a>.
        </p>

        <div className="home__buttons-wrapper">
          <GlowButton onClick={startHereButtonHandler}>Start Here</GlowButton>
          <GlowButton onClick={historyButtonHandler}>History</GlowButton>
        </div>
      </div>
    </div>
  )
}

export default Home
