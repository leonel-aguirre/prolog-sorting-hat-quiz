import "./App.scss"

import { useEffect, useState } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { getAuth, signInAnonymously } from "firebase/auth"

import "../firebase"
import { SessionProvider } from "../context/SessionProvider"
import PrologSessionWrapper from "../context/PrologSessionWrapper"
import Sandbox from "./PrologTestComponents/SandBox"
import Home from "./Home/Home"
import Quiz from "./Quiz/Quiz"
import Results from "./Results/Results"
import History from "./History/History"
import Loader from "./CoreUI/Loader/Loader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/results",
    element: <Results />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
])

const auth = getAuth()

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authenticate = async () => {
      if (!isAuthenticated) {
        try {
          await signInAnonymously(auth)

          setIsAuthenticated(true)
        } catch (error) {
          console.error(error)
        }
      }
    }

    authenticate()
  }, [isAuthenticated])

  return (
    <>
      {isAuthenticated ? (
        <SessionProvider>
          <PrologSessionWrapper>
            <div className="app">
              <RouterProvider router={router} />
            </div>
          </PrologSessionWrapper>
        </SessionProvider>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default App
