import React from "react";
import { AccountEditItem } from "./ui/AccountEditItem";
import Link from "next/link";

export const AccountEdit = () => {
  return (
    <form className="flex flex-col">
      <AccountEditItem />
      {/* <h1 className="border-b border-[#b9b9bb] font-bold py-1">配送情報</h1> */}
      <Link href={"/accountEdit/confirm"} className="block mx-auto my-8">
        <button className="w-48 h-14 rounded-xl border border-black block items-center">
          確認ページ
        </button>
      </Link>
    </form>
  );
};
