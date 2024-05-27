import Image from "next/image";
import React from "react";

type ProductImageProps = {
  path: string;
};

export const ProductImage = (props: ProductImageProps) => {
  return (
    <div className={`relative w-[190px] h-[260px]`}>
      <Image className="absolute object-cover" src={props.path} alt={""} fill />
    </div>
  );
};
