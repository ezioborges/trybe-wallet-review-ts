import { combineReducers } from "redux";
import { loginReducer } from "./loginReducer";
import { walletReducer } from "./walletReducer";

const rootReducer = combineReducers({ loginReducer, walletReducer });

export default rootReducer;
