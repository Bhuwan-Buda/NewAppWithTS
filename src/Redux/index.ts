import { combineReducers } from "redux";
import authenticateReducer from "./Authentication/reducer";
import saveDataReducer from "./SaveData/reducer";
import { userReducer } from "./UsersList/reducers";
const rootReducer = combineReducers({
    auth: authenticateReducer,
    data: saveDataReducer,
    user: userReducer,
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
