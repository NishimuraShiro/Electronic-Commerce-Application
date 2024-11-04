"use client";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { validateRegisterForm } from "@/utils/register_validation";
import { signUp } from "@/utils/auth";
import { LabeledTextField } from "./ui/LabeledTextField";
import { MessageAlert } from "./MessageAlert";
import { LoginLink } from "./LoginLink";
import { LabeledPasswordField } from "./ui/LabeledPasswordField";
import { Copyright } from "./ui/Copyright";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";

export const RegisterForm = () => {
  const [name, setName] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  // errorsの型を Record<string, boolean> に統一
  const [errors, setErrors] = useState<Record<string, boolean>>({
    name: false,
    email: false,
    password: false,
    passwordConfirmation: false
  });

  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = useHandleInputChange({
    setErrors,
    password,
    passwordConfirmation
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // バリデーション関数の結果を設定
    const { errors: validationErrors, errorMessages } = validateRegisterForm(
      name,
      email,
      password,
      passwordConfirmation
    );

    setErrors(validationErrors);
    setErrorMessages(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
      return;
    }

    setDisabledButton(true);
    const { success, message } = await signUp(
      name,
      nickname,
      email,
      password,
      passwordConfirmation
    );

    if (success) {
      setIsError(false);
      setErrorMessages([]);
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
            label="ユーザー名"
            value={name}
            onChange={handleInputChange(setName, "name")}
            required
            error={errors.name}
            helperText={errors.name ? "必須項目です" : ""}
          />
          <LabeledTextField
            label="ニックネーム"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            error={false}
            helperText=""
          />
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
      <LoginLink />
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
