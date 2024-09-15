export const validateEmail = (email: string) => {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
};

export const validateLogin = (email: string, password: string) => {
  const errors: string[] = [];

  if (!validateEmail(email))
    errors.push("O email precisa estar em um formato válido.");
  if (password.length < 6)
    errors.push("A senha precisa possuir 6 ou mais caracteres.");

  return errors;
};
