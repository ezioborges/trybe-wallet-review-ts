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
    expenses: object[];
    idToEdit: number;
    currencies: string[];
    expenseAmount: number[];
  };
};

export type FormDataType = {
  id: number,
    value: number,
    currency: string,
    method: string,
    tag: string,
    description: string,
    exchangeValue: number,
    exchangeRate: object,
};

export type RootState = LoginReducerStateType & WalletReducerStateType;

export type Dispatch = ThunkDispatch<RootState, null, UnknownAction>;
