import { ActionTypes } from "./types";
import * as action from "./action";
import { Dispatch } from "react";

export const saveDataFunction = (data: string) => {
    return (dispatch: Dispatch<ActionTypes>) => {
        dispatch(action.saveDataAction(data))
    }
}

