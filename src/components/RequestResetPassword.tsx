"use client";
import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LabeledTextField } from "./ui/LabeledTextField";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { validateRequestResetPasswordForm } from "@/utils/request_reset_password_validation";
import { requestResetPassword } from "@/utils/auth";
import { Copyright } from "./ui/Copyright";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";
import { ErrorAlertMessage } from "./ErrorAlertMessage";
import { SuccessAlertMessage } from "./ui/SuccessAlertMessage";

export const RequestResetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessages, setErrorMessagesDisplayedBelowButton] = useState<
    string[]
  >([]);
  const [errors, setErrors] = useState<Record<string, boolean>>({
    email: false
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [isReadyToDisplayErrors, setIsReadyToDisplayErrors] =
    useState<boolean>(false);
  const [isReadyToDisplayFieldErrors, setIsReadyToDisplayFieldErrors] =
    useState<boolean>(false);

  useEffect(() => {
    if (errorMessages.length > 0) {
      setIsReadyToDisplayErrors(true);
      console.log(errorMessages);
    } else {
      setIsReadyToDisplayErrors(false);
    }
  }, [errorMessages]);

  useEffect(() => {
    if (Object.values(errors).some((value) => value)) {
      setIsReadyToDisplayFieldErrors(true);
    } else {
      setIsReadyToDisplayFieldErrors(false);
    }
  }, [errors]);

  const handleInputChange = useHandleInputChange({
    setErrors
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション関数の結果を設定
    const { errors: validationErrors, errorMessages } =
      validateRequestResetPasswordForm(email);
    setDisabledButton(true);
    setErrors(validationErrors);
    setErrorMessagesDisplayedBelowButton(errorMessages);
    if (errorMessages.length > 0) {
      setIsError(true);
      setDisabledButton(false);
      return;
    } else {
      const result = await requestResetPassword(email);
      if (result) {
        const { success, message } = result;
        if (success) {
          setIsError(false);
          setShowSuccessMessage(true);
          setSuccessMessage(message);
        } else {
          setIsError(true);
          setDisabledButton(false);
          setErrors((prevErrors) => ({ ...prevErrors, email: true }));
          setErrorMessagesDisplayedBelowButton([message]);
        }
      } else {
        setDisabledButton(false);
      }
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
            errorStatus={errors.email && isReadyToDisplayFieldErrors}
            errorMessageDisplayedBelowInput={(() => {
              if (errors.email && isReadyToDisplayFieldErrors) {
                if (
                  errorMessages.find((msg) =>
                    msg.includes("メールアドレスを入力してください。")
                  )
                ) {
                  return "メールアドレスを入力してください。";
                } else if (
                  errorMessages.find((msg) =>
                    msg.includes(
                      "入力されたメールアドレスは登録されていません。"
                    )
                  )
                ) {
                  return "このメールアドレスは登録されていません。";
                } else {
                  return "メールアドレスの形式が誤っています。";
                }
              } else {
                return "";
              }
            })()}
          />
          {disabledButton ? (
            <DisabledButton buttonName="送信" />
          ) : (
            <ButtonAboutAuth buttonColor="bg-emerald-200" buttonName="送信" />
          )}
        </Box>
      </Grid>
      <Grid item xs={11}>
        {isError && isReadyToDisplayErrors ? (
          <ErrorAlertMessage
            errorMessages={errorMessages}
            setErrorMessages={setErrorMessagesDisplayedBelowButton}
          />
        ) : (
          showSuccessMessage && (
            <SuccessAlertMessage successMessage={successMessage} />
          )
        )}
      </Grid>
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
