import React from "react";
import { HistoryProductImage } from "./ui/HistoryProductImage";
import { HistoryProductName } from "./ui/HistoryProductName";
import { HistoryDeliveryDate } from "./ui/HistoryDeliveryDate";

// ここに非同期処理の値を持ってきて繰り返し処理。

const deliveryDate = new Date("2023-09-22");

const MetaData = [
  {
    path: "/sampleImage/sample2.jpg",
    name: "トレーニングベンチ マルチシットアップベンチ 折り畳み フラットベンチ 角度調節簡単 腹筋 背筋 ダンベルベンチ 収納便利 CTF",
  },
  {
    path: "/sampleImage/sample3.jpg",
    name: "科学的に正しい筋トレ 最強の教科書",
  },
  {
    path: "/sampleImage/sample4.jpg",
    name: "Scivation Xtend BCAA 7000mg Mango Madness (マンゴーマッドネス) 90杯分 国内正規品 サイベーション エクステンド 必須アミノ酸",
  },
  {
    path: "/sampleImage/sample5.jpg",
    name: "ダンベル可変式 5kg 10kg 15kg スチール製",
  },
];

export const History = () => {
  return (
    <>
      {/* 画像縦長サンプル */}
      <ul>
        {MetaData.map((item, index) => (
          <li key={item.path}>
            <div className="flex">
              <div className="w-1/3">
                <HistoryProductImage path={item.path} />
              </div>
              <div className="w-2/3 flex justify-center items-center">
                <div className="flex flex-col">
                  <div className="mb-1">
                    <HistoryProductName name={item.name} />
                  </div>
                  <div className="mt-1">
                    <HistoryDeliveryDate date={deliveryDate} />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
