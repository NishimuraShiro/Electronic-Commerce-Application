"use client";
import { parseCookies } from "nookies";
import { client } from "./client";

// export interface SignUpParams {
//   name: string | null;
//   nickname: string | null;
//   email: string | null;
//   password: string | null;
//   password_confirmation: string | null;
// }

export interface SignInParams {
  email: string | null;
  password: string | null;
}

export const signUp = (params: any) => {
  return client.post(
    "https://ec-app-backend-67e3477cc04a.herokuapp.com/api/v1/auth",
    params
  );
};

export const signIn = (params: SignInParams) => {
  return client.post("/auth/sign_in", params);
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  const cookies = parseCookies();

  if (!cookies._access_token || !cookies._client || !cookies._uid) return;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": cookies._access_token,
      client: cookies._client,
      uid: cookies._uid,
    },
  });
};
