import React from "react";

type ProductDescriptionProps = {
  productDescription: string;
};

export const ProductDescription = (props: ProductDescriptionProps) => {
  return (
    <h1 className="text-[#3C3C43] mt-1 leading-tight line-clamp-3">
      {props.productDescription}
    </h1>
  );
};
