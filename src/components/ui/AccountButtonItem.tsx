import Link from "next/link";
import React, { ReactNode } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const METADATA = [
  {
    path: "cart",
    comp: <ShoppingCartIcon className="mx-auto" />,
    title: "カート",
  },
  {
    path: "history",
    comp: <ShoppingBasketIcon className="mx-auto" />,
    title: "注文履歴",
  },
  {
    path: "accountEdit",
    comp: <ChangeCircleIcon className="mx-auto" />,
    title: "アカウント変更",
  },
  {
    // logアウトの実装次第では不要かも
    path: "logout",
    comp: <LogoutIcon className="mx-auto" />,
    title: "ログアウト",
  },
];

export const AccountButtonItem = () => {
  return (
    <>
      {METADATA.map((item) => (
        <div key={item.title} className="my-12">
          <Link href={item.path}>
            <div className="w-full text-center bg-[#D9D9D9] h-24 pt-6">
              {item.comp}
              <h1 className="text-6 w-24 mx-auto">{item.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
