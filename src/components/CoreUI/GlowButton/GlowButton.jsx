import "./GlowButton.scss"

const GlowButton = ({ children, onClick, color = "purple" }) => {
  return (
    <button className={`glow-button is-${color}`} onClick={onClick}>
      {children}
    </button>
  )
}

GlowButton.PURPLE = "purple"
GlowButton.RED = "red"
GlowButton.BLUE = "blue"
GlowButton.GREEN = "green"
GlowButton.YELLOW = "yellow"

export default GlowButton
