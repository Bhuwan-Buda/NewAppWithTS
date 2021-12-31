import { UserListConstants } from "./constants";
import * as action from './actions'
import * as api from './apis'
import { Dispatch } from "react";
import { actionTypes } from "./types";

export const getUserList = () => async(dispatch: Dispatch<actionTypes>) => {
    try {
        dispatch(action.loadingUserListAction())
        const { data } = await api.getUserList()
        dispatch(action.getUserListSuccessAction(data))
    } catch(error: unknown) {
        dispatch(action.getUserListFailAction())
    }
}
