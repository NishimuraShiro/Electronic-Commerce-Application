import React from "react";
import { AccountEditConfirmItem } from "./ui/AccountEditConfirmItem";
import Link from "next/link";

const MetaData = [
  {
    label: "編集",
    path: "/accountEdit",
  },
  {
    label: "確定",
    path: "/account/ordinary",
  },
];

export const AccountEditConfirm = () => {
  return (
    <form className="flex flex-col">
      <AccountEditConfirmItem />
      <div className="flex justify-evenly mt-32">
        {MetaData.map((item) => (
          <Link
            href={item.path}
            key={item.label}
            className="flex justify-center "
          >
            <button className="rounded-xl border border-black px-8 py-2 text-xl">
              {item.label}
            </button>
          </Link>
        ))}
      </div>
    </form>
  );
};
