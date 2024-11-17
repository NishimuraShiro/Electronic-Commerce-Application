"use client";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { validateRegisterForm } from "@/utils/register_validation";
import { signUp } from "@/utils/auth";
import { LabeledTextField } from "./ui/LabeledTextField";
import { LabeledPasswordField } from "./ui/LabeledPasswordField";
import { Copyright } from "./ui/Copyright";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";
import { ActionLink } from "./ActionLink";
import { SuccessAlertMessage } from "./ui/SuccessAlertMessage";
import { ErrorAlertMessage } from "./ErrorAlertMessage";

export const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    password: false,
    passwordConfirmation: false
  });
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessages, setErrorMessagesDisplayedBelowButton] = useState<
    string[]
  >([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = useHandleInputChange({
    setErrors,
    password,
    passwordConfirmation
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // バリデーション関数の結果を設定
    const { errors: validationErrors, errorMessages } = validateRegisterForm(
      name,
      email,
      password,
      passwordConfirmation
    );

    setDisabledButton(true);
    setErrors(validationErrors);
    setErrorMessagesDisplayedBelowButton(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
    }

    const result = await signUp(
      name,
      nickname,
      email,
      password,
      passwordConfirmation
    );

    if (result) {
      const { success, message } = result;
      console.log(success);
      console.log(message);
      if (success) {
        setIsError(false);
        setErrorMessagesDisplayedBelowButton([]);
        setShowSuccessMessage(true);
        setSuccessMessage(message);
      } else {
        setIsError(true);
        setErrorMessagesDisplayedBelowButton((prevMessages) => [
          ...prevMessages,
          message
        ]);
        if (message) {
          setErrors((prevErrors) => ({ ...prevErrors, email: true }));
        }
        setDisabledButton(false);
      }
    } else {
      // signUpがvoidを返した場合
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
          <LabeledTextField
            label="ユーザー名"
            value={name}
            onChange={handleInputChange(setName, "name")}
            required
            errorStatus={errors.name}
            errorMessageDisplayedBelowInput={
              errors.name ? "ユーザー名を入力してください。" : ""
            }
          />
          <LabeledTextField
            label="ニックネーム"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            errorStatus={false}
            errorMessageDisplayedBelowInput=""
          />
          <LabeledTextField
            label="メールアドレス"
            value={email}
            onChange={handleInputChange(setEmail, "email")}
            required
            errorStatus={errors.email}
            errorMessageDisplayedBelowInput={(() => {
              if (errors.email) {
                if (
                  errorMessages.find((msg) =>
                    msg.includes("既に使用されています")
                  )
                ) {
                  return "このメールアドレスは登録できません。";
                } else if (
                  errorMessages.find((msg) =>
                    msg.includes("メールアドレスを入力してください。")
                  )
                ) {
                  return "メールアドレスを入力してください。";
                } else {
                  return "メールアドレスの形式が誤っています。";
                }
              } else {
                return "";
              }
            })()}
          />
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
        {isError ? (
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
      <ActionLink
        href="../login"
        label="すでにアカウントをお持ちの方はこちらへ"
      />
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
