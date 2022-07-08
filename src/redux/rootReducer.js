import apiReducer from "./reducers/apiReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    mainAPI:apiReducer
})