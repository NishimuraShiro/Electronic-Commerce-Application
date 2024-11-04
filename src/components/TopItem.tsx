import React from "react";
import { TopRecommendedProducts } from "./ui/TopRecommendedProductsGroup";
import { TopImageAnimation } from "./ui/TopImageAnimation";

const METADATA = [
  {
    title: "おすすめ商品"
    // 渡すデータを記入
  },
  {
    title: "こちらもおすすめ"
    // 渡すデータを記入
  }
];

export const TopItem = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-8 mb-16">
          {/* アニメーション */}
          <TopImageAnimation />
        </div>
        {METADATA.map((item) => (
          <div key={item.title} className="mt-[8cm]">
            <TopRecommendedProducts title={item.title} />
          </div>
        ))}
      </div>
    </>
  );
};
