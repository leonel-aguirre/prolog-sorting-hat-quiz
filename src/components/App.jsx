import "./App.scss"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { SessionProvider } from "../Context/SessionProvider"
import PrologSessionWrapper from "../Context/PrologSessionWrapper"
import Sandbox from "./PrologTestComponents/SandBox"
import Home from "./Home/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sandbox",
    element: <Sandbox />,
  },
])

const App = () => {
  return (
    <SessionProvider>
      <PrologSessionWrapper>
        <div className="app">
          <RouterProvider router={router} />
        </div>
      </PrologSessionWrapper>
    </SessionProvider>
  )
}

export default App
