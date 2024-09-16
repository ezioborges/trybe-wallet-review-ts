export type LoginType = {
  email: string;
  password: string;
};

export type ExpensesType = {
  currency: string;
  value: number;
  method: string;
  tag: string;
  description: string;
};

const USER_KEY = "user";
const EXPENSES_KEY = "expenses";

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const saveUser = (login: LoginType) =>
  localStorage.setItem(USER_KEY, JSON.stringify(login));

export const getExpenses = () => {
  const expenses = localStorage.getItem(EXPENSES_KEY);
  return expenses ? JSON.parse(expenses) : [];
};

export const saveExpenses = (newExpenses: ExpensesType) => {
  const expenses = getExpenses();
  const updatedExpenses = [...expenses, newExpenses];

  localStorage.setItem(EXPENSES_KEY, JSON.stringify(updatedExpenses));
};

export const saveUserLogin = (email: string, password: string) => {
  const newLogin = {
    email: email,
    password: password,
  };

  saveUser(newLogin);
};
