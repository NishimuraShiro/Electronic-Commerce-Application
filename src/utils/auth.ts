"use client";
import { parseCookies } from "nookies";
import { client } from "./client";

export interface SignInParams {
  email: string | null;
  password: string | null;
}

export const signUp = async (
  name: string | null,
  nickname: string | null,
  email: string | null,
  password: string | null,
  passwordConfirmation: string | null
): Promise<{ success: boolean; message: string } | void> => {
  try {
    const response = await client.post("/auth/", {
      name,
      nickname,
      email,
      password,
      password_confirmation: passwordConfirmation
    });

    const responseData = response.data;
    if (responseData.data.id) {
      return {
        success: true,
        message:
          "新規登録の手続きがメールに送信されました。メールアドレスをご確認ください。"
      };
    }
  } catch (error: any) {
    if (error.response && error.response.data) {
      const responseData = error.response.data;
      console.log(responseData);
      if (
        responseData.errors &&
        responseData.errors.email &&
        Array.isArray(responseData.errors.email) &&
        responseData.errors.email.some((err: string) =>
          err.includes("はすでに存在します")
        )
      ) {
        return {
          success: false,
          message:
            "入力したメールアドレスは既に使用されています。別のメールアドレスを使用してください。"
        };
      } else {
        return;
      }
    }
  }
  return;
};

export const signIn = (params: SignInParams) => {
  return client.post("/auth/sign_in", params);
};

export const signOut = () => {
  const cookies = parseCookies();

  return client.delete("auth/sign_out", {
    headers: {
      "access-token": cookies._access_token,
      client: cookies._client,
      uid: cookies._uid
    }
  });
};

export const requestResetPassword = async (
  email: string
): Promise<{ success: boolean; message: string } | void> => {
  try {
    console.log("try request");
    const response = await fetch(
      "https://ec-app-backend-67e3477cc04a.herokuapp.com/api/v1/auth/password",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          redirect_url:
            "https://electronic-commerce-app-git-ff08e4-hamiltons-projects-25437349.vercel.app/reset_password"
        })
      }
    );
    console.log("after request");
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      return {
        success: true,
        message:
          "パスワード再設定の手続きがメールに送信されました。メールアドレスをご確認ください。"
      };
    } else if (response.status === 500) {
      console.log("error 500");
      return {
        success: false,
        message: "入力されたメールアドレスは登録されていません。"
      };
    } else {
      return {
        success: false,
        message: `Error: ${data.errors.join(", ")}`
      };
    }
  } catch {
    return;
  }
};

export const resetPassword = async (
  password: string,
  passwordConfirmation: string,
  resetPasswordToken: string | null
): Promise<{ success: boolean; message: string } | void> => {
  try {
    const response = await fetch(
      "https://ec-app-backend-67e3477cc04a.herokuapp.com/api/v1/auth/password",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          password,
          password_confirmation: passwordConfirmation,
          reset_password_token: resetPasswordToken
        })
      }
    );

    const responseData = await response.json();
    if (response.ok) {
      return { success: true, message: "" };
    } else {
      if (response.status === 401) {
        return {
          success: false,
          message:
            "パスワードを再設定するために<a href='https://electronic-commerce-app-git-ff08e4-hamiltons-projects-25437349.vercel.app/request_reset_password' style='color: blue; text-decoration: underline;'>こちら</a>のリンクから再設定手続きを行ってください。"
        };
      }
      return {
        success: false,
        message: `Error: ${responseData.errors.join(", ")}`
      };
    }
  } catch {
    return;
  }
};

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  const cookies = parseCookies();

  if (!cookies._access_token || !cookies._client || !cookies._uid) return;

  return client.get("/auth/sessions", {
    headers: {
      "access-token": cookies._access_token,
      client: cookies._client,
      uid: cookies._uid
    }
  });
};
