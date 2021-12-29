import { LoginConstants } from "./constants";
import { ActionTypes } from "./types";

export const authenticateAction = (): ActionTypes => ({
    type: LoginConstants.AUTHENTICATION
})

export const logoutAction = (): ActionTypes => ({
    type: LoginConstants.LOGOUT
})
