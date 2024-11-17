import {
  validateEmail,
  validateName,
  validatePassword,
  validatePasswordConfirmation
} from "./validationUtils";

interface RegisterValidationResult {
  errors: {
    name: boolean;
    email: boolean;
    password: boolean;
    passwordConfirmation: boolean;
  };
  errorMessages: string[];
}

export const validateRegisterForm = (
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
): RegisterValidationResult => {
  const validationResult: RegisterValidationResult = {
    errors: {
      name: false,
      email: false,
      password: false,
      passwordConfirmation: false
    },
    errorMessages: []
  };

  validateName(name, validationResult);
  validateEmail(email, validationResult);
  validatePassword(password, validationResult);
  validatePasswordConfirmation(
    password,
    passwordConfirmation,
    validationResult
  );
  return validationResult;
};
