import { LOGIN_STATE } from "../actions";

type ActionLoginType = {
  type: string;
  payload: { name: string; value: string };
};

const initialState = {
  isFetching: false,
  errorMessage: "",
  email: "",
  password: "",
};

export const loginReducer = (state = initialState, action: ActionLoginType) => {
  switch (action.type) {
    case LOGIN_STATE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
        // password: action.payload.value,
      };
    default:
      return state;
  }
};
