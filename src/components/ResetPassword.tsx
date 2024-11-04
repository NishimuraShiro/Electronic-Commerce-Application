"use client";
import React, { useState } from "react";
import { LabeledPasswordField } from "@/components/ui/LabeledPasswordField";
import { Alert, Box, Grid } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { Copyright } from "./ui/Copyright";
import { resetPassword } from "@/utils/auth";
import { validateResetPasswordForm } from "@/utils/reset_password_validation";
import MessageAlert from "./MessageAlert";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";

export const ResetPassword = () => {
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, boolean>>({
    password: false,
    passwordConfirmation: false
  });

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { errors: validationErrors, errorMessages } =
      validateResetPasswordForm(password, passwordConfirmation);

    setErrors(validationErrors);
    setErrorMessages(errorMessages);
    console.log(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
      return;
    }

    setDisabledButton(true);
    if (password && passwordConfirmation) {
      if (password !== passwordConfirmation) {
        setIsError(true);
        setDisabledButton(false);
        // setErrorMessages([
        //   "入力したパスワードと確認用パスワードが一致していません。"
        // ]);
        return;
      } else {
        const result = await resetPassword(
          password,
          passwordConfirmation,
          search_token
        );
        if (result.success) {
          setIsError(false);
          router.push("/login");
        } else {
          setIsError(true);
          setDisabledButton(false);
          // setErrorMessages([result.message || "エラーが発生しました。"]);
        }
      }
    } else {
      setIsError(true);
      setDisabledButton(false);
      setErrorMessage("必須項目を入力してください。");
      return;
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
            error={errors.password}
            helperText={
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
            error={errors.passwordConfirmation}
            helperText={
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
        {isError && errorMessage ? (
          <Alert
            className="mt-2"
            severity="error"
            onClose={() => {
              setIsError(false);
              setErrorMessage("");
            }}
          >
            <span dangerouslySetInnerHTML={{ __html: errorMessage }} />
          </Alert>
        ) : (
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
        )}
      </Grid>
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
