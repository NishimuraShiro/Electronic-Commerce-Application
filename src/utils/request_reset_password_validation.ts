import { validateEmail, ValidationResult } from "./validationUtils";

export const validateRequestResetPasswordForm = (
  email: string
): ValidationResult => {
  const errors: ValidationResult["errors"] = {
    email: false
  };
  const errorMessages: string[] = [];

  validateEmail(email, errors, errorMessages);

  return { errors, errorMessages };
};
