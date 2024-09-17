export const updatedValue = (valueToUpdate: number) => {
  const updated = Number(valueToUpdate);
  return updated.toFixed(2).replace(".", ",");
};
