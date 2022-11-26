import "./index.scss"

import React from "react"
import ReactDOM from "react-dom/client"

import App from "./components/App"
import reportWebVitals from "./reportWebVitals"
import {
  database,
  set,
  ref,
  onValue,
  getAuth,
  signInAnonymously,
} from "./firebase"

const auth = getAuth()

;(async () => {
  try {
    const userCredentials = await signInAnonymously(auth)

    console.log({ userCredentials })
  } catch (error) {
    console.error(error)
  }

  console.log("Writing data")

  set(ref(database, "/users/" + 1234), {
    username: "Test",
    email: "test@test.com",
  })

  const userRef = ref(database, "users/" + 1)

  onValue(userRef, (snapshot) => {
    const data = snapshot.val()

    console.log({ data })
  })
})()
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
