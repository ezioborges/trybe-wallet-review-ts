import {
  ERRORS_MESSAGE,
  HANDLE_STATE,
  RESET_FORM,
  LOADING,
} from "../../types/actionTypes";
import { ActionHandleType } from "../../types/stateTypes";

const initialState = {
  errorMessage: [],
  email: "",
  password: "",
  isLoading: false,
};

export const loginReducer = (
  state = initialState,
  action: ActionHandleType
) => {
  switch (action.type) {
    case HANDLE_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case RESET_FORM:
      return {
        ...state,
        email: "",
        password: "",
      };
    case ERRORS_MESSAGE:
      return {
        ...state,
        email: "",
        password: "",
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
