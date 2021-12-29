import { Dispatch } from "react"
import { ActionTypes } from "./types"
import * as action from "./action"

export const authenticateFunction = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(action.authenticateAction())
    }
}

export const logoutFunction = () => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(action.logoutAction())
    }
}
