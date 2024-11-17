import {
  validatePassword,
  validatePasswordConfirmation,
  ValidationResult
} from "./validationUtils";

export const validateResetPasswordForm = (
  password: string,
  passwordConfirmation: string
): ValidationResult => {
  const validationResult: ValidationResult = {
    errors: {
      password: false,
      passwordConfirmation: false
    },
    errorMessages: []
  };

  validatePassword(password, validationResult);
  validatePasswordConfirmation(
    password,
    passwordConfirmation,
    validationResult
  );

  return validationResult;
};
