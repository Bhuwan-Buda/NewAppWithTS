import { DataConstants } from "./constants";

interface DataType {
    type: DataConstants.SAVE_DATA,
    payload: string
}

export type ActionTypes = DataType