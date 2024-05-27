"use client";
import React, { useState, useEffect } from "react";
import { animated, useTransition } from "@react-spring/web";

const images = [
  // 画像ファイル名の配列
  { id: 1, path: "/sampleImage/topSample1.jpg" },
  { id: 2, path: "/sampleImage/topSample2.png" },
  { id: 3, path: "/sampleImage/topSample3.png" },
];

// React.FC（React.FunctionComponent）型エイリアス：関数コンポーネントの作成
export const TopImageAnimation: React.FC = () => {
  const [image, setImage] = useState(0);

  // 画像遷移の設定
  const transitions = useTransition(images[image], {
    from: { opacity: 0, transform: "translateX(-35%)" }, // アニメーションの開始状態(不透明度：0、横方向変化なし)
    enter: { opacity: 1, transform: "translateX(-50%)" }, // アニメーション進行中状態(不透明度：1、横方向-50%)
    leave: { opacity: 0, transform: "translateX(-150%)" }, // アニメーション終了状態(不透明度：0、横方向-100%)
    config: { duration: 2000 }, // アニメーション持続時間2秒
  });

  // 4秒ごとに次の画像に切り替えるタイマーをセットアップ
  useEffect(() => {
    // ４秒ごとに繰り返しimageステートを更新する
    const timer = setInterval(() => {
      // インデックス番号の更新
      setImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    // imageが更新されるときにタイマーをクリアする
    return () => {
      clearInterval(timer);
    };
  }, [image]);

  return (
    <>
      {/* transition関数の呼び出し：アニメーションされた要素(image)をレンダリングする */}
      {transitions((style, item, _, image) => (
        <animated.img // アニメーションを適用するimg要素
          key={item.id}
          src={item.path}
          style={{
            ...style, // transitions関数から渡されたアニメーションスタイル
            width: "75%",
            height: "auto",
            position: "absolute",
            left: "50%", // 要素を中央に配置
            // top: 0, // 要素を上端に配置
            // transform: "translateX(-50%)",
            zIndex: image, // 重なり順を設定、z軸を設けたイメージ
          }}
          alt=""
        />
      ))}
    </>
  );
};
