import { validateEmail, ValidationResult } from "./validationUtils";

export const validateRequestResetPasswordForm = (
  email: string
): ValidationResult => {
  const validationResult: ValidationResult = {
    errors: {
      email: false
    },
    errorMessages: []
  };

  validateEmail(email, validationResult);

  return validationResult;
};
