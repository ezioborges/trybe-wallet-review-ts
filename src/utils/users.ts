type LoginType = {
  email: string;
  password: string;
};

const USER_KEY = "user";

export const getUser = () => {
  const user = localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

export const saveUser = (login: LoginType) =>
  localStorage.setItem(USER_KEY, JSON.stringify(login));

export const saveUserLogin = (email: string, password: string) => {
  const newLogin = {
    email: email,
    password: password,
  };

  saveUser(newLogin);
};

