import {
  ERRORS_MESSAGE,
  LOADING,
  HANDLE_STATE,
  REQUEST_CURRENCIES_FAILED,
  REQUEST_CURRENCIES_STARTED,
  REQUEST_CURRENCIES_SUCCESSFULL,
  RESET_FORM,
  TOTAL_EXPENSES,
  ADD_EXPENSE,
} from "../../types/actionTypes";
import { Dispatch } from "../../types/stateTypes";
import { getCurrencies } from "../../utils/getCurrencies";
import { ExpensesType } from "../../utils/localStorageData";

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
export const addExpense = (newExpenses: ExpensesType) => ({
  type: ADD_EXPENSE,
  payload: newExpenses,
});

//calcula o valor total das despesas
export const totalExpenses = (total: number) => ({
  type: TOTAL_EXPENSES,
  payload: total,
});

export const fetchCurrencies = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrenciesStarted());
    try {
      const response = await getCurrencies()
      const data = Object.keys(response)
      dispatch(requestCurrenciesSuccessfull(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      dispatch(requestCurrenciesFailed(error));
    }
  };
};
