import React from "react";

type Props = { subTotal: number };
export const CartSubtotal = ({ subTotal }: Props) => {
  // 数値を地域設定に合わせてフォーマット
  const formattedPrice = subTotal.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 0,
  });
  return (
    <div className="flex justify-center my-4">
      <h1 className="text-[25px]">小計</h1>
      <h1 className="ml-[4px] text-[25px] font-bold">
        {formattedPrice}
        <span className="font-bold">（税込）</span>
      </h1>
    </div>
  );
};
