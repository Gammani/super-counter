import {combineReducers, createStore} from "redux";
import counterReducer from "./counter-reducer";

let rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer);