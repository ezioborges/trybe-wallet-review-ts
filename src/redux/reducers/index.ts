import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { currenciesReducer } from "./currenciesReducer";

const rootReducer = combineReducers({ loginReducer, currenciesReducer });

export default rootReducer;
