import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import rootReducer from "./reducers";
import { thunk } from "redux-thunk";

//vai parar de reclamar quando eu tiver mais de um reducer no combiners...
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
