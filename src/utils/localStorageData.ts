export type LoginType = {
  email: string;
  password: string;
};

export type ExpensesType = {
  id: number;
  currency: string;
  value: string;
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
  const expenses: ExpensesType[] = getExpenses();

  const nextId =
    expenses.length ? Math.max(...expenses.map((exp: ExpensesType) => exp.id)) + 1 : 0;
  const newExpenseWithId = { ...newExpenses, id: nextId };

  const updatedExpenses = [...expenses, newExpenseWithId];

  localStorage.setItem(EXPENSES_KEY, JSON.stringify(updatedExpenses));
};

export const saveUserLogin = (email: string, password: string) => {
  const newLogin = {
    email: email,
    password: password,
  };

  saveUser(newLogin);
};
