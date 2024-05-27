"use client";
import React, { useContext, useState } from "react";
import { setCookie, destroyCookie } from "nookies";
import { Alert, Box, Grid, Link, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { RequiredMark } from "@/components/ui/RequiredMark";
import { Copyright } from "@/components/ui/Copyright";
import { PasswordField } from "@/components/ui/PasswordField";
import { SignInParams, signIn } from "@/utils/auth";
import { AuthContext } from "@/context/AuthContext";

const LoginPage = () => {
  const { isSignedIn, setIsSignedIn, setCurrentUser } = useContext(AuthContext);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.toString() || "";
    const password = data.get("password")?.toString() || "";

    if (!email || !password) {
      setIsError(true);
      setErrorMessage("必須項目を入力してください。");
      return;
    }

    const params: SignInParams = {
      email: email,
      password: password
    };

    setIsError(false);
    setErrorMessage("");

    try {
      const res = await signIn(params);
      console.log(res.status);
      if (res.status === 200) {
        // ログインに成功した場合はCookieに各値を格納
        setCookie(null, "_access_token", res.headers["access-token"], {
          path: "/"
        });
        setCookie(null, "_client", res.headers["client"], { path: "/" });
        setCookie(null, "_uid", res.headers["uid"], { path: "/" });
        console.log("access-token：", res.headers["access-token"]);
        console.log("client：", res.headers["client"]);
        console.log("uid：", res.headers["uid"]);
        setIsSignedIn(true);
        console.log(isSignedIn);
        setCurrentUser(res.data.data);
        router.push("/top");
        console.log("Signed in successfully!");
      } else {
        setIsError(true);
        setErrorMessage("ログイン情報が見つかりません。");
      }
    } catch (error) {
      // Cookieからトークンを削除しています
      destroyCookie(null, "_access_token");
      destroyCookie(null, "_client");
      destroyCookie(null, "_uid");
      setIsError(true);
      setErrorMessage("エラーが発生しました。");
    }
  };

  return (
    <div className="m-4">
      <div className="flex justify-center items-center">
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <li className="list-none">
            <div className="flex items-center">
              <h2 className="text-xl">メールアドレス</h2>
              <RequiredMark />
            </div>
            <TextField
              name="email"
              sx={{ width: "288px" }}
              variant="outlined"
            />
          </li>
          <li className="mt-12 list-none">
            <div className="flex items-center">
              <h2 className="text-xl">パスワード</h2>
              <RequiredMark />
            </div>
            <PasswordField name="password" />
          </li>
          <button
            type="submit"
            className="w-72 h-12 mx-auto mt-12 rounded-3xl bg-emerald-300 text-center text-xl block"
          >
            <p>ログイン</p>
          </button>
          {isError ? (
            <Alert
              className="mt-2"
              severity="error"
              onClose={() => {
                setIsError(false);
                setErrorMessage("");
              }}
            >
              {errorMessage.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </Alert>
          ) : null}
          <Grid className="mt-12" justifyContent="flex-end">
            <Link href="../register" variant="subtitle1">
              アカウントを作成する
            </Link>
          </Grid>
        </Box>
      </div>
      <Copyright />
    </div>
  );
};

export default LoginPage;
