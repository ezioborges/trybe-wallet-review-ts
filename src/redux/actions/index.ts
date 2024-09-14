import { ERRORS_MESSAGE, LOGIN_STATE, RESET_FORM } from "../../types/actionTypes";

export const loginStateUpdate = (name: string, value: string) => ({
  type: LOGIN_STATE,
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
