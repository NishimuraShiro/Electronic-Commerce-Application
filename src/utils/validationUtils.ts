export const passwordValidation = /^[a-zA-Z\d]{6,16}$/;
export const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ValidationResult {
  errors: Record<string, boolean>;
  errorMessages: string[];
}

export const validateName = (
  name: string,
  validationResult: ValidationResult
) => {
  if (!name) {
    validationResult.errors.name = true;
    validationResult.errorMessages.push("ユーザー名を入力してください。");
  }
};

export const validateEmail = (
  email: string,
  validationResult: ValidationResult
) => {
  if (!email) {
    validationResult.errors.email = true;
    validationResult.errorMessages.push("メールアドレスを入力してください。");
  } else if (!emailValidation.test(email)) {
    validationResult.errors.email = true;
    validationResult.errorMessages.push("メールアドレスの形式が誤っています。");
  }
};

export const validatePassword = (
  password: string,
  validationResult: ValidationResult
) => {
  if (!password) {
    validationResult.errors.password = true;
    validationResult.errorMessages.push("パスワードを入力してください。");
  } else if (!passwordValidation.test(password)) {
    validationResult.errors.password = true;
    validationResult.errorMessages.push(
      "パスワードは、6字以上16字以下の半角入力を含む必要があります。"
    );
  }
};

export const validatePasswordConfirmation = (
  password: string,
  passwordConfirmation: string,
  validationResult: ValidationResult
) => {
  if (!passwordConfirmation) {
    validationResult.errors.passwordConfirmation = true;
    validationResult.errorMessages.push("確認用パスワードを入力してください。");
  } else if (password !== passwordConfirmation) {
    validationResult.errors.passwordConfirmation = true;
    validationResult.errorMessages.push(
      "パスワードと確認用パスワードが一致しません。"
    );
  }
};
