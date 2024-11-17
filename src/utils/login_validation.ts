import {
  validateEmail,
  validatePassword,
  ValidationResult
} from "./validationUtils";

export const validateLoginForm = (
  email: string,
  password: string
): ValidationResult => {
  const validationResult: ValidationResult = {
    errors: {
      email: false,
      password: false
    },
    errorMessages: []
  };

  validateEmail(email, validationResult);
  validatePassword(password, validationResult);

  return validationResult;
};
