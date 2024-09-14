import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";



export type LoginReduxState = {
  isFetching: boolean;
  email: string;
  password: string;
  errorMessage: string[];
};

export type RootState = LoginReduxState;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;

export type LoginPayloadType = {
  name: string,
  value: string,
  errorMessage: string[]
}

export type ActionReducerType = {
  type: string;
  payload: LoginPayloadType;
};

