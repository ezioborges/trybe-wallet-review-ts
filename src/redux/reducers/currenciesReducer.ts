import {
  HANDLE_STATE,
  REQUEST_CURRENCIES_FAILED,
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
} from "../../types/actionTypes";
import { ActionWalletType } from "../../types/stateTypes";

const initialState = {
  isLoading: false,
  currencies: [],
  errorMessages: [],
  currency: "",
  value: 0,
  method: "",
  tag: "",
  description: "",
};

export const currenciesReducer = (
  state = initialState,
  action: ActionWalletType
) => {
  switch (action.type) {
    case REQUEST_CURRENCIES_STARTED:
      return {
        ...state,
        isLoading: true,
        currencies: [],
        errorMessages: [],
      };
    case REQUEST_CURRENCIES_SUCCESSFULL:
      return {
        ...state,
        currencies: action.payload,
        isLoading: false,
        errorMessages: [],
      };
    case REQUEST_CURRENCIES_FAILED:
      return {
        ...state,
        errorMessages: action.payload,
        currencies: [],
        isLoading: false,
      };
    case HANDLE_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      }
    default:
      return state;
  }
};
