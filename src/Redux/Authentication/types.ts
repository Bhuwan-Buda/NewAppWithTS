import { LoginConstants } from "./constants";

interface AUTHENTICATION {
    type: LoginConstants.AUTHENTICATION
}

interface LOGOUT {
    type: LoginConstants.LOGOUT
}

export type ActionTypes = AUTHENTICATION | LOGOUT

