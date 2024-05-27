import Link from "next/link";
import React, { ReactNode } from "react";
import LockOpenIcon from "@mui/icons-material/LockOpen";

export const AccountLoginButton = () => {
  return (
    <Link href="">
      <div className="w-full text-center bg-[#D9D9D9] h-24 pt-6">
        <LockOpenIcon className="mx-auto" />
        <h1 className="text-6 w-24 mx-auto">ログイン</h1>
      </div>
    </Link>
  );
};
