import React from "react";

type ProductNameProps = {
  productName: string;
};

export const ProductName = (props: ProductNameProps) => {
  return (
    <h1 className=" mb-1 font-[15px] leading-tight line-clamp-3">
      {props.productName}
    </h1>
  );
};
