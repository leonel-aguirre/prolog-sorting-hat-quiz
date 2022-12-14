import { createContext, useContext, useReducer } from "react"

import {
  SET_SESSION,
  SET_CURRENT_CATEGORY_INDEX,
  SET_CATEGORY_CONFIGURATION_LIST,
  SET_CURRENT_QUESTION_ID,
  SET_CURRENT_SCORE,
} from "../constants"

const SessionContext = createContext(null)
const SessionDispatchContext = createContext(null)

const initialState = {
  session: null,
  currentCategoryIndex: 0,
  categoryConfigurationList: "[1,2,3,4,5,6,7,8]",
  currentQuestionID: "q1",
  currentScore: "[0,0,0,0]",
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
    case SET_CURRENT_CATEGORY_INDEX: {
      return {
        ...state,
        currentCategoryIndex: Number(action.data),
      }
    }
    case SET_CATEGORY_CONFIGURATION_LIST: {
      return {
        ...state,
        categoryConfigurationList: action.data,
      }
    }
    case SET_CURRENT_QUESTION_ID: {
      return {
        ...state,
        currentQuestionID: action.data,
      }
    }
    case SET_CURRENT_SCORE: {
      return {
        ...state,
        currentScore: action.data,
      }
    }
    default: {
      throw Error("Unknown action: " + action.type)
    }
  }
}
