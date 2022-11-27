import "./Modal.scss"

import { createPortal } from "react-dom"

const modalRoot = document.querySelector("#modal-root")

const Modal = ({ isOpen = false, children }) => {
  const renderContent = () => {
    if (isOpen) {
      return <>{children}</>
    }
  }

  return createPortal(
    <div className={`modal ${isOpen ? "is-open" : ""}`}>{renderContent()}</div>,
    modalRoot
  )
}

export default Modal
