import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type LoginReduxState = {
  loginReducer: {
    isLoading: boolean;
    email: string;
    password: string;
    errorMessage: string[];
  };
};

export type CurrenciesReduxState = {
  currenciesReducer: {
    id: number;
    isLoading: boolean;
    currencies: string[];
    errorMessages: string[];
    currency: string;
    value: number;
    method: string;
    tag: string;
    description: string;
  };
};

export type ExpensesReduxState = {
  expensesReducer: {
    id: number;
    currency: string;
    value: number;
    method: string;
    tag: string;
    description: string;
  };
};

export type HandleChangePayload = {
  name: string;
  value: string;
  errorMessage: string[];
};

export type ActionHandleType = {
  type: string;
  payload: HandleChangePayload;
};

export type RootState = LoginReduxState &
  CurrenciesReduxState &
  ExpensesReduxState;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;
