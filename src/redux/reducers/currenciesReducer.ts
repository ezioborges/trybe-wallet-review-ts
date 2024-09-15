import {
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
} from "../../types/actionTypes";
import { ActionCurrencyType } from "../../types/stateTypes";

const initialState = {
  isFetching: false,
  currencies: {},
  errorMessage: [],
};

export const currenciesReducer = (
  state = initialState,
  action: ActionCurrencyType
) => {
  switch (action.type) {
    case REQUEST_CURRENCIES_STARTED:
      return {
        ...state,
        isFetching: true,
        currencies: [],
        errorMessage: [],
      };
    case REQUEST_CURRENCIES_SUCCESSFULL:
      return {
        ...state,
        isFetching: false,
        currencies: {...action.payload},
      };
    default:
      return state;
  }
};
