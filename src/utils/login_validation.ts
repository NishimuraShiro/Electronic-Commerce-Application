import {
  validateEmail,
  validatePassword,
  ValidationResult
} from "./validationUtils";

export const validateLoginForm = (
  email: string,
  password: string
): ValidationResult => {
  const errors: ValidationResult["errors"] = {
    email: false,
    password: false
  };
  const errorMessages: string[] = [];

  validateEmail(email, errors, errorMessages);
  validatePassword(password, errors, errorMessages);

  return { errors, errorMessages };
};
