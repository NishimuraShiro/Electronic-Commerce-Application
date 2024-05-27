import React from "react";

type ProductPriceProps = {
  productPrice: number;
};

export const ProductPrice = (props: ProductPriceProps) => {
  // 数値を地域設定に合わせてフォーマット
  const formattedPrice = props.productPrice.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 0,
  });
  return (
    <div>
      <h1 className="my-1 text-[17px] font-bold">
        {formattedPrice}
        <span className="font-bold">（税込）</span>
      </h1>
    </div>
  );
};
