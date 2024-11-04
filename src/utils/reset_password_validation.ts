import {
  validatePassword,
  validatePasswordConfirmation,
  ValidationResult
} from "./validationUtils";

export const validateResetPasswordForm = (
  password: string,
  passwordConfirmation: string
): ValidationResult => {
  const errors: ValidationResult["errors"] = {
    password: false,
    passwordConfirmation: false
  };
  const errorMessages: string[] = [];

  validatePassword(password, errors, errorMessages);
  validatePasswordConfirmation(
    password,
    passwordConfirmation,
    errors,
    errorMessages
  );

  return { errors, errorMessages };
};
