"use client";
import React, { useContext, useRef, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import { Box, Grid, Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { Copyright } from "@/components/ui/Copyright";
import { SignInParams, signIn } from "@/utils/auth";
import { AuthContext } from "@/context/AuthContext";
import { LabeledPasswordField } from "@/components/ui/LabeledPasswordField";
import { useHandleInputChange } from "@/hooks/useHandleInputChange";
import { LabeledTextField } from "./ui/LabeledTextField";
import MessageAlert from "./MessageAlert";
import { validateLoginForm } from "@/utils/login_validation";
import { DisabledButton } from "./ui/DisabledButton";
import { ButtonAboutAuth } from "./ui/ButtonAboutAuth";

export const LoginForm = () => {
  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const passwordRef = useRef<HTMLInputElement>(null);
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

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const { errors, errorMessages } = validateLoginForm(email, password);
    setErrors(errors);
    setErrorMessages(errorMessages);
    if (errorMessages.length > 0) {
      setIsError(true);
      return;
    }

    const data = new FormData(event.currentTarget);

    setEmail(data.get("email")?.toString() || "");
    setPassword(data.get("password")?.toString() || "");

    if (!email || !password) {
      setIsError(true);
      setErrorMessages(["必須項目を入力してください。"]);
      return;
    }

    const params: SignInParams = {
      email: email,
      password: password
    };

    setIsError(false);
    setErrorMessages([]);

    try {
      setDisabledButton(true);
      const res = await signIn(params);
      console.log(res);
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
        setErrorMessages(["ログイン情報が見つかりません。"]);
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
          console.log(passwordRef.current);
          if (passwordRef.current) {
            passwordRef.current.focus();
          }
          setErrorMessages(["メールアドレスとパスワードが一致しません。"]);
        } else {
          setIsError(true);
          setErrorMessages(["エラーが発生しました。"]);
        }
      } else {
        setIsError(true);
        setErrorMessages(["エラーが発生しました。"]);
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
            error={errors.email}
            helperText={
              errors.email ? "メールアドレスの形式が誤っています。" : ""
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
      <Grid container className="mt-12" justifyContent="center">
        <Link href="../request_reset_password" underline="none">
          パスワードをお忘れですか？
        </Link>
      </Grid>
      <Grid container className="mt-12" justifyContent="center">
        <Link href="../register" variant="subtitle1">
          アカウントを作成する
        </Link>
      </Grid>
      <div className="my-10">
        <Copyright />
      </div>
    </Grid>
  );
};
