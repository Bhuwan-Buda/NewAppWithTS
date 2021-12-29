import { DataConstants } from "./constants";
import { ActionTypes } from "./types";

export const saveDataAction = (data: string): ActionTypes => ({
    type: DataConstants.SAVE_DATA,
    payload: data
})
