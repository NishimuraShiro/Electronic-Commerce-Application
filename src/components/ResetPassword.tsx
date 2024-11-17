"use client";
import React, { useState } from "react";
import { LabeledPasswordField } from "@/components/ui/LabeledPasswordField";
import { Box, Grid } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { Copyright } from "./ui/Copyright";
import { resetPassword } from "@/utils/auth";
import { validateResetPasswordForm } from "@/utils/reset_password_validation";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";
import { ErrorAlertMessage } from "./ErrorAlertMessage";

export const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, boolean>>({
    password: false,
    passwordConfirmation: false
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessages, setErrorMessagesDisplayedBelowButton] = useState<
    string[]
  >([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const search_token =
    searchParams.get("reset_password_token")?.toString() || null;

  // useHandleInputChange フックの使用
  const handleInputChange = useHandleInputChange({
    setErrors,
    password,
    passwordConfirmation
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { errors: validationErrors, errorMessages } =
      validateResetPasswordForm(password, passwordConfirmation);

    setDisabledButton(true);
    setErrors(validationErrors);
    setErrorMessagesDisplayedBelowButton(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
    }

    const result = await resetPassword(
      password,
      passwordConfirmation,
      search_token
    );

    if (result) {
      const { success, message } = result;
      if (success) {
        setIsError(false);
        setErrorMessagesDisplayedBelowButton([]);
        setShowSuccessMessage(true);
        router.push("/login");
      } else {
        setIsError(true);
        setErrorMessagesDisplayedBelowButton((prevMessages) => [
          ...prevMessages,
          message
        ]);
        setDisabledButton(false);
      }
    } else {
      setDisabledButton(false);
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ textAlign: "center" }}
        >
          <LabeledPasswordField
            label="パスワード"
            name="password"
            value={password}
            onChange={handleInputChange(setPassword, "password")}
            errorStatus={errors.password}
            errorMessageDisplayedBelowInput={
              errors.password
                ? "パスワードは、6字以上16字以下の半角入力を含む必要があります。"
                : ""
            }
          />
          <LabeledPasswordField
            label="パスワード（確認用）"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={handleInputChange(
              setPasswordConfirmation,
              "passwordConfirmation"
            )}
            errorStatus={errors.passwordConfirmation}
            errorMessageDisplayedBelowInput={
              errors.passwordConfirmation
                ? "パスワードと確認用パスワードが一致しません。"
                : ""
            }
          />
          {disabledButton ? (
            <DisabledButton buttonName="確認" />
          ) : (
            <ButtonAboutAuth buttonColor="bg-emerald-200" buttonName="確認" />
          )}
        </Box>
      </Grid>
      <Grid item xs={11}>
        {isError && (
          <ErrorAlertMessage
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessagesDisplayedBelowButton}
          />
        )}
      </Grid>
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
