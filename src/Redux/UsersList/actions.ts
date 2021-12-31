import { UserListConstants } from "./constants";
import { actionTypes , user} from "./types";

export const getUserListSuccessAction = (data: user[]): actionTypes => (
    {
        type: UserListConstants.GET_USER_LIST_SUCCESS,
        payload: data
    }
)

export const getUserListFailAction = (): actionTypes => (
    {
        type: UserListConstants.GET_USER_LIST_FAIURE
    }
)

export const loadingUserListAction = (): actionTypes => (
    {
        type: UserListConstants.LOADING_USER_LIST
    }
)
