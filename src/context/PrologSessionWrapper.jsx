import { useEffect, useState } from "react"
import pl from "tau-prolog"
import promisesLoader from "tau-prolog/modules/promises"
import listsLoader from "tau-prolog/modules/lists"
import randomLoader from "tau-prolog/modules/random"

import KnowledgeBase from "./knowledgeBase.pl"
import { SET_SESSION } from "../constants"
import { useSession, useSessionDispatch } from "./SessionProvider"
import Loader from "../components/CoreUI/Loader/Loader"

promisesLoader(pl)
randomLoader(pl)
listsLoader(pl)

const prologSession = pl.create()

const PrologSessionWrapper = ({ children }) => {
  const { session } = useSession()
  const dispatch = useSessionDispatch()

  const [isProgramLoaded, setIsProgramLoaded] = useState(false)

  // Sets the session object.
  useEffect(() => {
    if (!session) {
      dispatch({
        type: SET_SESSION,
        data: prologSession,
      })
    }
  }, [session, dispatch])

  useEffect(() => {
    const loadProgram = async () => {
      await session.promiseConsult(KnowledgeBase)

      setIsProgramLoaded(true)
    }

    if (session) {
      loadProgram()
    }
  }, [session])

  if (!session || !isProgramLoaded) {
    return <Loader />
  }

  return <>{children}</>
}

export default PrologSessionWrapper
