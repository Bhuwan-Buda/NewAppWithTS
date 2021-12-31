import { DataConstants } from "./constants"
import { ActionTypes } from "./types"

interface initialStateInterface {
    saveData: string[]
}

const initialState: initialStateInterface = {
    saveData: []
}

const saveDataReducer = (state: initialStateInterface = initialState, action: ActionTypes) => {
    switch(action.type) {
        case DataConstants.SAVE_DATA :
            return {
                ...state,
                saveData : [
                    ...state.saveData, action.payload
                ]
            }
        default: return state
    }
}

export default saveDataReducer

