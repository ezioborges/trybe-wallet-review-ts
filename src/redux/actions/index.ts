import {
  ERRORS_MESSAGE,
  LOADING,
  HANDLE_STATE,
  REQUEST_CURRENCIES_FAILED,
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
  RESET_FORM,
  ADD_EXPENSE,
  NEW_EXPENSES_ARRAY,
} from "../../types/actionTypes";
import { Dispatch, FormDataType, TableExpensesType } from "../../types/stateTypes";
import { getCurrencies } from "../../utils/getCurrencies";

// dispara a handleChange.
export const actionHandleChangeInput = (name: string, value: string) => ({
  type: HANDLE_STATE,
  payload: { name, value },
});

// reseta os formulários
export const actionResetForm = (email: string, password: string) => ({
  type: RESET_FORM,
  payload: { email, password },
});

// dispara erros no login
export const actionLoginErrors = (errors: string[]) => ({
  type: ERRORS_MESSAGE,
  payload: errors,
});

// dispara o loading
export const actionLoading = (bool: boolean) => ({
  type: LOADING,
  payload: bool,
});

// inicia a requisição das moedas
export const requestCurrenciesStarted = () => ({
  type: REQUEST_CURRENCIES_STARTED,
});

// devolve as moedas em caso de sucesso
export const requestCurrenciesSuccessfull = (currencies: object) => ({
  type: REQUEST_CURRENCIES_SUCCESSFULL,
  payload: currencies,
});

// lança erro em caso de falha
export const requestCurrenciesFailed = (errors: string[]) => ({
  type: REQUEST_CURRENCIES_FAILED,
  payload: errors,
});

// adiciona uma nova despesa
export const addExpense = (newExpenses: FormDataType) => ({
  type: ADD_EXPENSE,
  payload: newExpenses,
});

// cria o novo array após deletar um item do array 
export const newExpensesArray = (newExpenses: TableExpensesType[]) => ({
  type: NEW_EXPENSES_ARRAY,
  payload: newExpenses,
});

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrenciesStarted());
    try {
      const response = await getCurrencies();
      const data = Object.keys(response);
      dispatch(requestCurrenciesSuccessfull(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(requestCurrenciesFailed(error));
    }
  };
};
