import {
  ADD_EXPENSE,
  REQUEST_CURRENCIES_FAILED,
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
} from "../../types/actionTypes";
import { WalletReducerStateType } from "../../types/stateTypes";

type WalletActionType = {
  type: string;
  payload: WalletReducerStateType;
};

const initialState = {
  isLoading: false,
  errorMessages: [],
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica de uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que esta sendo editada
};

export const walletReducer = (
  state = initialState,
  action: WalletActionType
) => {
  switch (action.type) {
    case REQUEST_CURRENCIES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_CURRENCIES_SUCCESSFULL:
      return {
        ...state,
        currencies: action.payload,
        isLoading: false,
      };
    case REQUEST_CURRENCIES_FAILED:
      return {
        ...state,
        errorMessages: action.payload,
        currencies: [],
        isLoading: false,
      };
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};
