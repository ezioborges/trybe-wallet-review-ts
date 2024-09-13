export const INCREMENT_COUNT = "INCREMENT_COUNT";
export const LOGIN_STATE = "LOGIN_STATE";

export const incrementCount = (increment = 1) => ({
  type: INCREMENT_COUNT,
  payload: increment,
});

export const loginStateUpdate = (name: string, value: string) => ({
  type: LOGIN_STATE,
  payload: { name, value },
});
