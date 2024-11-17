import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { emailValidation, passwordValidation } from "@/utils/validationUtils";

export interface UseHandleInputChangeProps {
  setErrors: Dispatch<SetStateAction<Record<string, boolean>>>;
  password?: string;
  passwordConfirmation?: string;
}

export const useHandleInputChange = (props: UseHandleInputChangeProps) => {
  const { setErrors, password, passwordConfirmation } = props;

  return (
      setState: Dispatch<SetStateAction<string>>,
      field: string // フィールド名は string 型で柔軟に
    ) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setState(value);

      // name フィールドのバリデーション
      if (field === "name") {
        setErrors((prev) => ({
          ...prev,
          [field]: value === ""
        }));
      }
      // email フィールドのバリデーション
      else if (field === "email") {
        if (value === "") {
          setErrors((prev) => ({
            ...prev,
            [field]: true
          }));
        } else {
          const isValid = emailValidation.test(value);
          setErrors((prev) => ({
            ...prev,
            [field]: !isValid
          }));
        }
      }
      // password フィールドのバリデーション
      else if (field === "password") {
        if (value === "") {
          setErrors((prev) => ({
            ...prev,
            [field]: false
          }));
        } else {
          const isValid = passwordValidation.test(value);
          setErrors((prev) => ({
            ...prev,
            [field]: !isValid
          }));

          if (passwordConfirmation !== undefined) {
            setErrors((prev) => ({
              ...prev,
              passwordConfirmation: value !== passwordConfirmation
            }));
          }
        }
      }
      // passwordConfirmation フィールドのバリデーション
      else if (
        field === "passwordConfirmation" &&
        passwordConfirmation !== undefined
      ) {
        if (value === "") {
          setErrors((prev) => ({
            ...prev,
            [field]: true
          }));
        } else {
          setErrors((prev) => ({
            ...prev,
            [field]: value !== password
          }));
        }
      } else {
        // 想定外のフィールドの場合もエラーの型を保持
        setErrors((prev) => ({
          ...prev,
          [field]: false
        }));
      }
    };
};
