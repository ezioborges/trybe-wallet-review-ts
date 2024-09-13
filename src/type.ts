import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

// esse tipagem é importante por que depois eu vou usar funções async
export type ExempleReduxState = {
  exempleReducer: {
    count: number;
  };
};

export type Dispatch = ThunkDispatch<ExempleReduxState, null, UnknownAction>;
