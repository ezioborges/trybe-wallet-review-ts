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

export type LoginPayloadType = {
  name: string;
  value: string;
  errorMessage: string[];
};

export type CurrenciesPayloadType = {
  name: string;
  value: string;
  errorMessage: string[];
}

export type ActionReducerType = {
  type: string;
  payload: LoginPayloadType;
};

export type ActionWalletType = {
  type: string;
  payload: CurrenciesPayloadType;
};

export type RootState = LoginReduxState & CurrenciesReduxState;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;
