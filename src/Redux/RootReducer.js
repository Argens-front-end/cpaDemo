import { combineReducers } from "redux";
import { AppReducer } from "./AppRedux/reducer";

export const rootReducer = combineReducers({ App: AppReducer });
