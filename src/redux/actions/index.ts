import {
  ERRORS_MESSAGE,
  LOADING,
  HANDLE_STATE,
  REQUEST_CURRENCIES_FAILED,
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
  RESET_FORM,
  EXPENSES_STARTED,
} from "../../types/actionTypes";
import { Dispatch } from "../../types/stateTypes";

export const actionHandleChangeInput = (name: string, value: string) => ({
  type: HANDLE_STATE,
  payload: { name, value },
});

export const actionResetForm = (email: string, password: string) => ({
  type: RESET_FORM,
  payload: { email, password },
});

export const actionLoginErrors = (errors: string[]) => ({
  type: ERRORS_MESSAGE,
  payload: errors,
});

export const actionLoading = (bool: boolean) => ({
  type: LOADING,
  payload: bool,
});

export const requestCurrenciesStarted = () => ({
  type: REQUEST_CURRENCIES_STARTED,
});

export const requestCurrenciesSuccessfull = (currencies: object) => ({
  type: REQUEST_CURRENCIES_SUCCESSFULL,
  payload: currencies,
});

export const requestCurrenciesFailed = (errors: string[]) => ({
  type: REQUEST_CURRENCIES_FAILED,
  payload: errors,
});

export const requestExpenses = (expenses: object) => ({
  type: EXPENSES_STARTED,
  payload: expenses
})

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrenciesStarted())
    try {

      const response = await fetch('https://economia.awesomeapi.com.br/json/all')
      const data = await response.json()
      const currencies = Object.keys(data)
      dispatch(requestCurrenciesSuccessfull(currencies))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(requestCurrenciesFailed(error))
    }
    
  }
}
