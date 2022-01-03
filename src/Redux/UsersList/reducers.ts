import { UserListConstants } from "./constants";
import { actionTypes, user } from "./types";


interface intialStateInterface {
    loading: boolean
    error: boolean
    userList: user[]
}

const intialState: intialStateInterface = {
    loading: false,
    error: false,
    userList: []
}

export const userReducer = (state: intialStateInterface = intialState, action: actionTypes) => {
    switch(action.type) {
        case UserListConstants.LOADING_USER_LIST :
            return {
                ...state,
                loading: true,
                error: false
            }
        case UserListConstants.GET_USER_LIST_SUCCESS:
            return {
                ...state,
                userList: action.payload,
                loading: false,
                error: false
            }
        case UserListConstants.GET_USER_LIST_FAIURE: 
            return {
                ...state,
                userList: [],
                loading: false,
                error: true
            }
        default: return state
    }
}
