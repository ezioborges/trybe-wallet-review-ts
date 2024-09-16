import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { currenciesReducer } from "./currenciesReducer";
import { expensesReducer } from "./expensesReducer";

const rootReducer = combineReducers({ loginReducer, currenciesReducer, expensesReducer });

export default rootReducer;
