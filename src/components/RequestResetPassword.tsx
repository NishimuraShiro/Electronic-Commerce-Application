"use client";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import { LabeledTextField } from "./ui/LabeledTextField";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import MessageAlert from "./MessageAlert";
import { validateRequestResetPasswordForm } from "@/utils/request_reset_password_validation";
import { requestResetPassword } from "@/utils/auth";
import { Copyright } from "./ui/Copyright";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";

export const RequestResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({
    email: false
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleInputChange = useHandleInputChange({
    setErrors
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション関数の結果を設定
    const { errors: validationErrors, errorMessages } =
      validateRequestResetPasswordForm(email);

    setErrors(validationErrors);
    setErrorMessages(errorMessages);
    console.log(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
      return;
    }

    setDisabledButton(true);
    const { success, message } = await requestResetPassword(email);

    if (success) {
      setIsSuccess(true);
      setSuccessMessage(message);
    } else {
      setDisabledButton(false);
      setIsError(true);
      setErrorMessages([message]);
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
          <LabeledTextField
            label="メールアドレス"
            value={email}
            onChange={handleInputChange(setEmail, "email")}
            required
            error={errors.email}
            helperText={
              errors.email ? "メールアドレスの形式が誤っています" : ""
            }
          />
          {disabledButton ? (
            <DisabledButton buttonName="送信" />
          ) : (
            <ButtonAboutAuth buttonColor="bg-emerald-200" buttonName="送信" />
          )}
        </Box>
      </Grid>
      <Grid item xs={11}>
        <MessageAlert
          isError={isError}
          errorMessages={errorMessages}
          setErrorMessages={setErrorMessages}
          isSuccess={isSuccess}
          successMessage={successMessage}
          onSuccessClose={() => {
            setIsSuccess(false);
            setSuccessMessage("");
          }}
        />
      </Grid>
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
