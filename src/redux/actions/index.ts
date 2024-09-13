export const INCREMENT_COUNT = "INCREMENT_COUNT";

export const incrementCount = (increment = 1) => ({
  type: INCREMENT_COUNT,
  payload: increment,
});
