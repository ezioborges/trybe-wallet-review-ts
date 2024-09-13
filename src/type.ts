import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type LoginActionType = {
  isFetching: boolean;
  email: string;
  password: string;
  errorMessage: string;
};

// esse tipagem é importante por que depois eu vou usar funções async
export type ExempleReduxState = {
  exempleReducer: {
    count: number;
  };
};

export type LoginReduxState = {
  isFetching: boolean;
  email: string;
  password: string;
  errorMessage: string;
};

export type RootState = ExempleReduxState & LoginReduxState;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;
