import "./GlowButton.scss"

const GlowButton = ({
  children,
  onClick,
  color = "purple",
  isSmall = false,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={`glow-button is-${color} is-${isSmall ? "small" : "large"}`}
      onClick={onClick}
    >
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
