"use client";
import { LoginForm } from "@/components/LoginForm";
import { AuthContext } from "@/context/AuthContext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const LoginPage = () => {
  const { isSignedIn, currentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn && currentUser) {
      router.push("/top");
    } else {
      setIsLoading(false);
    }
  }, [isSignedIn, currentUser, router]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="m-4">
      <ArrowBackIcon
        sx={{ fontSize: 45 }}
        onClick={() => {
          router.back();
        }}
      />
      <p className="text-3xl text-center">ログイン</p>
      <LoginForm />
    </div>
  );
};

export default LoginPage;