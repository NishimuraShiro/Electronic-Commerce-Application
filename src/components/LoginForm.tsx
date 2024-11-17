"use client";
import React, { useContext, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/navigation";
import { Copyright } from "@/components/ui/Copyright";
import { SignInParams, signIn } from "@/utils/auth";
import { AuthContext } from "@/context/AuthContext";
import { LabeledPasswordField } from "@/components/ui/LabeledPasswordField";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { LabeledTextField } from "./ui/LabeledTextField";
import { ErrorAlertMessage } from "./ErrorAlertMessage";
import { validateLoginForm } from "@/utils/login_validation";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";
import { ActionLink } from "./ActionLink";

export const LoginForm = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessages, setErrorMessagesDisplayedBelowButton] = useState<
    string[]
  >([]);
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, boolean>>({
    email: false,
    password: false
  });
  const handleInputChange = useHandleInputChange({
    setErrors,
    password
  });
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisabledButton(true);
    const { errors: validationErrors, errorMessages } = validateLoginForm(
      email,
      password
    );
    setErrors(validationErrors);
    setErrorMessagesDisplayedBelowButton(errorMessages);

    if (errorMessages.length > 0) {
      setIsError(true);
      setDisabledButton(false);
      return;
    }

    const params: SignInParams = {
      email: email,
      password: password
    };

    try {
      const res = await signIn(params);
      if (res.status === 200) {
        setCookie(null, "_access_token", res.headers["access-token"], {
          path: "/"
        });
        setCookie(null, "_client", res.headers["client"], { path: "/" });
        setCookie(null, "_uid", res.headers["uid"], { path: "/" });
        setIsSignedIn(true);
        setCurrentUser(res.data.data);
        router.push("/top");
      } else {
        setDisabledButton(false);
        setIsError(true);
        setErrorMessagesDisplayedBelowButton([
          "ログイン情報が見つかりません。"
        ]);
      }
    } catch (error: any) {
      setDisabledButton(false);
      destroyCookie(null, "_access_token");
      destroyCookie(null, "_client");
      destroyCookie(null, "_uid");

      if (error.response) {
        const errorStatus = error.response.status;
        console.log(errorStatus);
        if (errorStatus === 401) {
          setEmail(email);
          setPassword("");
          setIsError(true);
          setErrorMessagesDisplayedBelowButton([
            "メールアドレスとパスワードが一致しません。"
          ]);
          setErrors((prevErrors) => ({ ...prevErrors, password: true }));
        } else {
          setIsError(true);
          setErrorMessagesDisplayedBelowButton(["エラーが発生しました。"]);
        }
      } else {
        setIsError(true);
        setErrorMessagesDisplayedBelowButton(["エラーが発生しました。"]);
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
            errorStatus={errors.email}
            errorMessageDisplayedBelowInput={(() => {
              if (errors.email) {
                if (
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
            errorMessageDisplayedBelowInput={(() => {
              if (errors.password) {
                if (
                  errorMessages.find((msg) =>
                    msg.includes("メールアドレスとパスワードが一致しません。")
                  )
                ) {
                  return "パスワードが正しくありません。";
                } else {
                  return "パスワードは、6字以上16字以下の半角入力を含む必要があります。";
                }
              } else {
                return "";
              }
            })()}
          />
          {disabledButton ? (
            <DisabledButton buttonName="ログイン" />
          ) : (
            <ButtonAboutAuth
              buttonColor="bg-emerald-300"
              buttonName="ログイン"
            />
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
      <ActionLink
        href="../request_reset_password"
        label="パスワードをお忘れですか？"
      />
      <ActionLink href="../register" label="アカウントを作成する" />
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
