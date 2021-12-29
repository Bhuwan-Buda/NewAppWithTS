import { LoginConstants } from "./constants";
import { ActionTypes } from "./types";

interface initialStateInterface {
    isAuthenticated: boolean
}

const initialState: initialStateInterface = {
    isAuthenticated: false
}
const authenticateReducer = (state: initialStateInterface = initialState, action: ActionTypes) => {
    switch(action.type) {
        case LoginConstants.AUTHENTICATION :
            return {
                ...state,
                isAuthenticated: true
            }
        case LoginConstants.LOGOUT :
            return {
                ...state,
                isAuthenticated: false
            }   
        default: return state
    }
}

export default authenticateReducer
