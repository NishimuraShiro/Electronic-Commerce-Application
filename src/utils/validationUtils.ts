export const passwordValidation = /^[a-zA-Z\d]{6,16}$/;
export const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  errors: Record<string, boolean>;
  errorMessages: string[];
}

export const validateEmail = (
  email: string,
  errors: Record<string, boolean>,
  errorMessages: string[]
) => {
  if (!email) {
    errors.email = true;
    errorMessages.push("メールアドレスを入力してください。");
  } else if (!emailValidation.test(email)) {
    errors.email = true;
    errorMessages.push("メールアドレスの形式が誤っています。");
  }
};

export const validatePassword = (
  password: string,
  errors: Record<string, boolean>,
  errorMessages: string[]
) => {
  if (!password) {
    errors.password = true;
    errorMessages.push("パスワードを入力してください。");
  } else if (!passwordValidation.test(password)) {
    errors.password = true;
    errorMessages.push(
      "パスワードは、6字以上16字以下の半角入力を含む必要があります。"
    );
  }
};

export const validatePasswordConfirmation = (
  password: string,
  passwordConfirmation: string,
  errors: Record<string, boolean>,
  errorMessages: string[]
) => {
  if (!passwordConfirmation) {
    errors.passwordConfirmation = true;
    errorMessages.push("確認用パスワードを入力してください。");
  } else if (password !== passwordConfirmation) {
    errors.passwordConfirmation = true;
    errorMessages.push("パスワードと確認用パスワードが一致しません。");
  }
};
