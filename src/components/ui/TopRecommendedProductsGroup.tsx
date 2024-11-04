import React from "react";
import { TopRecommendedProduct } from "./TopRecommendedProduct";
import Link from "next/link";

const GOODSDATA = [
  {
    name: "ダンベル可変式 5kg 10kg 15kg スチール製",
    path: "/sampleImage/sample1.jpg"
  },
  {
    name: "トレーニングベンチ マルチシットアップベンチ 折り畳み フラットベンチ 角度調節簡単 腹筋 背筋 ダンベルベンチ 収納便利 CTF",
    path: "/sampleImage/sample2.jpg"
  },
  {
    name: "科学的に正しい筋トレ 最強の教科書",
    path: "/sampleImage/sample3.jpg"
  },
  {
    name: "Scivation Xtend BCAA 7000mg Mango Madness (マンゴーマッドネス) 90杯分 国内正規品 サイベーション エクステンド 必須アミノ酸",
    path: "/sampleImage/sample4.jpg"
  }
];

type TopRecommendedProductsProps = {
  title: string;
};
export const TopRecommendedProducts = (props: TopRecommendedProductsProps) => {
  return (
    <div className="-mb-[18rem]">
      <h1 className="flex justify-center text-2xl mb-4">{props.title}</h1>
      <div className="flex flex-wrap justify-evenly mb-6">
        {GOODSDATA.map((item, index) => (
          <div key={index} className="w-1/2 flex justify-evenly mb-2">
            {/* link先はAPIで取得 */}
            <Link href={"/detail"}>
              <TopRecommendedProduct name={item.name} path={item.path} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
