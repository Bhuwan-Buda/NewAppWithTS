import { DataConstants } from "./constants"
import { ActionTypes } from "./types"

interface initialStateInterface {
    saveData: {}[]
}

const initialState: initialStateInterface = {
    saveData: []
}

const saveDataReducer = (state: initialStateInterface = initialState, action: ActionTypes) => {
    switch(action.type) {
        case DataConstants.SAVE_DATA :
            const userData = action.payload
            return {
                ...state,
                saveData : [
                    ...state.saveData,
                    {
                        saveData: userData
                    }   
                ] 
            }
        default: return state
    }
}

export default saveDataReducer

