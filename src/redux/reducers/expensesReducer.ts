import { EXPENSES_STARTED } from "../../types/actionTypes";
import { ActionHandleType } from "../../types/stateTypes";

const initialState = {
  expenses: [],
};

export const expensesReducer = (
  state = initialState,
  action: ActionHandleType
) => {
  switch (action.type) {
    case EXPENSES_STARTED:
      return {
        ...state,
      };
    default:
      return state;
  }
};
