import Image from "next/image";
import React from "react";

type TopRecommendedProductProps = {
  name: string;
  path: string;
};

export const TopRecommendedProduct = (props: TopRecommendedProductProps) => {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg m-2"
      style={{
        // ボーダースタイル
        border: "1px solid  rgb(249 250 251)",
        top: "-3px",
        boxShadow: " 0 2px 3px rgba(0, 0, 0, 0.3)",
        overflow: "hidden",
      }}
    >
      <h1 className="text-[15px] pl-0 py-[4px] leading-[1.50] line-clamp-2 max-w-[130px] break-words">
        {props.name}
      </h1>
      <div className="mt-3">
        <div className="w-[140px] h-[140px] rounded-lg flex items-center justify-center">
          <Image
            className="absolute object-cover"
            src={props.path}
            alt=""
            width={90}
            height={90}
          />
        </div>
      </div>
    </div>
  );
};
