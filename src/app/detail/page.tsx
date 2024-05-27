import React from "react";
import { GoodsDetail } from "@/components/GoodsDetail";

// APIデータ取得
const page = () => {
  const goodsInfo = {
    path: "/sampleImage/sample3.jpg",
    description: "科学的に正しい筋トレ 最強の教科書",
    price: 1800,
  };

  const review = 1;

  const info =
    "詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル詳細サンプル";

  // レビュー情報の配列
  const customerReviews = [
    {
      iconPath: "/sampleImage/icon_sample.jpeg",
      username: "username1",
      reviewValue: 3.5,
      title: "レビュータイトル1",
      date: new Date("2023-09-29"),
      imageMoviePath: [],
      addition:
        "サンプルレビュー1サンプルレビュー1サンプルレビュー1サンプルレビュー1サンプルレビュー1サンプルレビュー1サンプルレビュー1サンプルレビュー1",
    },
    {
      iconPath: "/sampleImage/icon_sample.jpeg",
      username: "username2",
      reviewValue: 5.0,
      title: "レビュータイトル2",
      date: new Date("2023-09-28"),
      imageMoviePath: [],
      addition:
        "サンプルレビュー2サンプルレビュー2サンプルレビュー2サンプルレビュー2サンプルレビュー2サンプルレビュー2サンプルレビュー2サンプルレビュー2",
    },
    {
      iconPath: "/sampleImage/icon_sample.jpeg",
      username: "username3",
      reviewValue: 2.5,
      title: "レビュータイトル3",
      date: new Date("2023-10-02"),
      imageMoviePath: [
        "/sampleImage/sample6.png",
        "/sampleImage/sample4.jpg",
        "/sampleImage/TopPageAnimation.mp4",
      ],
      addition:
        "サンプルレビュー3サンプルレビュー3サンプルレビュー3サンプルレビュー3サンプルレビュー3サンプルレビュー3サンプルレビュー3サンプルレビュー3",
    },
  ];

  return (
    <div className="m-4">
      <GoodsDetail
        goods={goodsInfo}
        info={info}
        review={review}
        customerReview={customerReviews}
      />
    </div>
  );
};

export default page;
