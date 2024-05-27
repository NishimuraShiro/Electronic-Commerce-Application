import React from "react";

type ProductStockProps = {
  productStock: number;
};

export const ProductStock = (props: ProductStockProps) => {
  return (
    <>
      <h1 className="font-[15px] my-1">
        <span>在庫：</span>
        {props.productStock}
      </h1>
    </>
  );
};
