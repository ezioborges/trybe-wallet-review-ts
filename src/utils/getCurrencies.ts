export const getCurrencies = async () => {
  const response = await fetch("https://economia.awesomeapi.com.br/json/all");
  const data = await response.json();
  delete data.USDT;
  return data;
};
