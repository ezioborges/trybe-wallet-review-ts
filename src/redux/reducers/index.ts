import { combineReducers } from "redux";
import { INCREMENT_COUNT } from "../actions";

type ActionType = {
  type: string;
  payload: number;
};

const INITIAL_STATE = {
  count: 0,
};

export const exempleReducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({ exempleReducer });

export default rootReducer;
