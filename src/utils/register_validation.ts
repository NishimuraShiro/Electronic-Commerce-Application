interface ValidationResult {
  errors: {
    name: boolean;
    email: boolean;
    password: boolean;
    passwordConfirmation: boolean;
  };
  errorMessages: string[];
}
export const passwordValidation = /^[a-zA-Z\d]{6,16}$/;
export const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validateRegisterForm = (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
): ValidationResult => {
  const errors = {
    name: false,
    email: false,
    password: false,
    passwordConfirmation: false
  };
  const errorMessages: string[] = [];

  if (!name) {
    errors.name = true;
    errorMessages.push("ユーザー名を入力してください。");
  }

  if (!email) {
    errors.email = true;
    errorMessages.push("メールアドレスを入力してください。");
  } else if (!emailValidation.test(email)) {
    errors.email = true;
    errorMessages.push("メールアドレスの形式が誤っています。");
  }

  if (!password) {
    errors.password = true;
    errorMessages.push("パスワードを入力してください。");
  } else if (!passwordValidation.test(password)) {
    errors.password = true;
    errorMessages.push(
      "パスワードは、6字以上16字以下の半角入力を含む必要があります。"
    );
  }

  if (!passwordConfirmation) {
    errors.passwordConfirmation = true;
    errorMessages.push("確認用パスワードを入力してください。");
  } else if (password !== passwordConfirmation) {
    errors.passwordConfirmation = true;
    errorMessages.push("パスワードと確認用パスワードが一致しません。");
  }

  return { errors, errorMessages };
};
