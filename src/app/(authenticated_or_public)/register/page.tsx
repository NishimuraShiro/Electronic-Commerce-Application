"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/context/AuthContext";
import { RegisterForm } from "@/components/RegisterForm";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RegisterPage = () => {
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
      <p className="text-3xl text-center">新期登録</p>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
