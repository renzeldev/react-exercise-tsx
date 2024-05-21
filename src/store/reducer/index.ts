import { combineReducers, Reducer } from "redux";
import createActionReducer from "./actionreducer";

export interface RootState {
    number: number
}

const reducer:Reducer = combineReducers({
    createActionReducer
})

export default reducer;