import { ERRORS_MESSAGE, LOGIN_STATE, RESET_FORM } from "../../types/actionTypes";
import { ActionReducerType } from "../../types/stateTypes";


const initialState = {
  errorMessage: [],
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action: ActionReducerType) => {
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case RESET_FORM:
      return {
        ...state,
        email: '',
        password: '',
      };
    case ERRORS_MESSAGE:
      return {
        ...state,
        email: '',
        password: '',
        errorMessage: action.payload,
      }
    default:
      return state;
  }
};
