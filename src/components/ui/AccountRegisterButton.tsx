import Link from "next/link";
import React, { ReactNode } from "react";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export const AccountRegisterButton = () => {
  return (
    <Link href="">
      <div className="w-full text-center bg-[#D9D9D9] h-24 pt-6">
        <PersonAddAlt1Icon className="mx-auto" />
        <h1 className="text-6 w-24 mx-auto">新規登録</h1>
      </div>
    </Link>
  );
};
