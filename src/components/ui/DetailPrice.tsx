import React from "react";

type DetailPriceProps = {
  price: number;
};

export const DetailPrice = (props: DetailPriceProps) => {
  // 数値を地域設定に合わせてフォーマット
  const formattedPrice = props.price.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 0,
  });
  return (
    <div>
      <h1 className="text-[25px] font-bold">
        {formattedPrice}
        <span className="font-bold">（税込）</span>
      </h1>
    </div>
  );
};
