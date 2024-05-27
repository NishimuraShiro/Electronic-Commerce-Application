"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from "react";
import { useRouter, usePathname } from "next/navigation";
import { getCurrentUser } from "@/utils/auth";

type User = {
  id: string;
  name: string;
  email: string;
};

export const AuthContext = createContext<{
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  currentUser: User | undefined;
  setCurrentUser: Dispatch<SetStateAction<User | undefined>>;
}>({
  loading: false,
  setLoading: () => {},
  isSignedIn: false,
  setIsSignedIn: () => {}, // ダミー関数の提供
  currentUser: undefined,
  setCurrentUser: () => {}
});

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | undefined>();
  const router = useRouter();
  const pathname = usePathname();

  const handleGetCurrentUser = async () => {
    try {
      console.log(isSignedIn);

      const res = await getCurrentUser();
      console.log(res?.data.isLogin);
      if (res?.data.isLogin === true) {
        // 最新の状態を取得するために関数を使用
        setIsSignedIn((prev) => {
          console.log("isSignedIn after update:", prev);
          return true;
        });
        setCurrentUser(res?.data.data);

        console.log("User data:", res?.data.data);
      } else {
        console.log("No current user");
      }
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, [setCurrentUser]);

  useEffect(() => {
    // 未認証の場合はloginページへリダイレクト
    if (!loading && !isSignedIn && pathname !== "/login") {
      router.push("/login");
    }
  }, [loading, isSignedIn, pathname]);

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        currentUser,
        setCurrentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
