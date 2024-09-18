import { UnknownAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export type LoginReducerStateType = {
  loginReducer: {
    isLoading: boolean;
    email: string;
    password: string;
    errorMessage: string[];
  };
};

export type WalletReducerStateType = {
  walletReducer: {
    isLoading: boolean;
    editor: boolean;
    expenses: FormDataType[];
    idToEdit: number;
    currencies: string[];
    expenseAmount: number[];
  };
};

export type FormDataType = {
  id: number;
  value: string;
  currency: string;
  method: string;
  tag: string;
  description: string;
  exchangeValue: number;
  exchangeRate: ExchangeRateType;
};

export type TableExpensesType = {
  id: number;
  description: string;
  tag: string;
  method: string;
  value: string;
  exchangeRate: ExchangeRateType;
  currency: string;
};

type ExchangeRateType = {
  [key: string]: {
    name: string;
    ask: number;
  };
};

export type RootState = LoginReducerStateType & WalletReducerStateType;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;
