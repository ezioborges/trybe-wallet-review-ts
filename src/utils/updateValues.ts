export const updatedValue = (valueToUpdate: string) => {
  const updated = Number(valueToUpdate);
  return updated.toFixed(2).replace(".", ",");
};
