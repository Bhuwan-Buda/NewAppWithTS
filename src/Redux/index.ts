import { combineReducers } from "redux";
import authenticateReducer from "./Authentication/reducer";
import saveDataReducer from "./SaveData/reducer";
const rootReducer = combineReducers({
    auth: authenticateReducer,
    data: saveDataReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
