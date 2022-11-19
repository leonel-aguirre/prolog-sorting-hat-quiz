import * as pl from "tau-prolog"
import { useEffect } from "react"

import { useSession, useSessionDispatch } from "../Context/SessionProvider"
import { SET_SESSION } from "../constants"
import KnowledgeBase from "./knowledgeBase.pl"

export const useProlog = () => {
  const { session } = useSession()
  const dispatch = useSessionDispatch()

  // Sets the session object.
  useEffect(() => {
    if (!session) {
      dispatch({
        type: SET_SESSION,
        data: pl.create(),
      })
    }
  }, [session, dispatch])

  // Makes a consult based on the KnowledgeBase file.
  const getLoadedSession = async () => {
    if (session) {
      return new Promise((resolve, reject) => {
        session.consult(KnowledgeBase, {
          success: () => {
            /* Program loaded correctly */
            resolve(session)
          },
          error: (error) => {
            /* Error parsing program */
            reject(error)
          },
        })
      })
    }
  }

  /**
   * Performs a query against the current session.
   *
   * @param {String} string The string containing the query to be executed.
   * @returns A result based on the given query.
   */
  const query = async (string) => {
    const loadedSession = await getLoadedSession()

    if (loadedSession) {
      return new Promise((resolve, reject) => {
        loadedSession.query(string, {
          success: () => {
            loadedSession.answer({
              success: (answer) => {
                /* Answer */
                resolve(answer?.links)
              },
              error: (error) => {
                /* Uncaught error */
                reject(error)
              },
              fail: () => {
                /* Fail */
                // TODO: Figure out how to handle this case.
                reject("FAIL")
              },
              limit: () => {
                /* Limit exceeded */
                // TODO: Figure out how to handle this case.
                reject("LIMIT")
              },
            })
          },
          error: (error) => {
            reject(error)
          },
        })
      })
    }
  }

  // TODO: Fix issue with strings containing ".".
  /**
   * Normalizes the shape of the result of a query, this may be used with query
   * results that are expected to return a string, these are represented as lists
   * in prolog, so they must be normalized.
   *
   * @param {String} input The data to be normalized.
   * @returns A string containing the normalized output.
   */
  const normalizeString = (input) => {
    const normalize = (e) =>
      e.id === "." || e.id === "[]" ? e.args.map(normalize) : e.id

    return input?.args.map(normalize).flat(Infinity).join("")
  }

  return {
    query,
    normalizeString,
  }
}
