import "./Home.scss"

import GlowButton from "../CoreUI/GlowButton/GlowButton"

const Home = () => {
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

        <div className="home__buttons-wrapper">
          <GlowButton>Start Here</GlowButton>
          <GlowButton>History</GlowButton>
        </div>
      </div>
    </div>
  )
}

export default Home
