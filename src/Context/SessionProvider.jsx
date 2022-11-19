import { createContext, useContext, useReducer } from "react"

import { SET_SESSION } from "../constants"

const SessionContext = createContext(null)
const SessionDispatchContext = createContext(null)

const initialState = {
  session: null,
}

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useReducer(sessionReducer, initialState)

  return (
    <SessionContext.Provider value={session}>
      <SessionDispatchContext.Provider value={dispatch}>
        {children}
      </SessionDispatchContext.Provider>
    </SessionContext.Provider>
  )
}

export const useSession = () => {
  return useContext(SessionContext)
}

export const useSessionDispatch = () => {
  return useContext(SessionDispatchContext)
}

export const sessionReducer = (state, action) => {
  switch (action.type) {
    case SET_SESSION: {
      return {
        ...state,
        session: action.data,
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
