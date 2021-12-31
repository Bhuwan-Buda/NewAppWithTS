import { UserListConstants } from "./constants";

export interface user {
    id: number
    name: string
    email: string
    phone: string
    address: {
        city: string
    }
    company: {
        name: string
    }
    website: string
}

interface getUserListSuccess {
    type: UserListConstants.GET_USER_LIST_SUCCESS,
    payload: user[]
}

interface getUserListFail {
    type: UserListConstants.GET_USER_LIST_FAIURE
}

interface loadingUserList {
    type: UserListConstants.LOADING_USER_LIST
}


export type actionTypes = getUserListSuccess | getUserListFail | loadingUserList
