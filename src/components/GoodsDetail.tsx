"use client";
import React, { useState } from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DetailImage } from "./ui/DetailImage";
import { DetailPrice } from "./ui/DetailPrice";
import { DetailReview } from "./ui/DetailReview";
import { DetailSelect } from "./ui/DetailSelect";
import { GoodsDescription } from "./ui/GoodsDescription";
import { DetailGoodsInfo } from "./ui/DetailGoodsInfo";
import { DetailCustomerReview } from "./ui/DetailCustomerReview";
import { Rating } from "@mui/material";
import Image from "next/image";
import ClearIcon from "@mui/icons-material/Clear";

// 値段、数量選択の部分は応急処置で、ml-10を付与。スタイリング調整要
// リファクタ
type CustomerReview = {
  iconPath: string;
  username: string;
  reviewValue: number;
  title: string;
  date: Date;
  imageMoviePath: string[];
  addition: string;
};

type GoodsDetailProps = {
  goods: {
    path: string;
    description: string;
    price: number;
  };
  review: number;
  info: string;
  customerReview: CustomerReview[];
};

export const GoodsDetail = (props: GoodsDetailProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1); // 親コンポーネントのstateをnumber型に設定

  const handleSelectChange = (value: number) => {
    setSelectedQuantity(value); // DetailSelectから受け取った値を親コンポーネントのstateに反映
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  // 商品をカートに追加する関数
  const addToCart = () => {};
  // 特定の今すぐ購入するための関数
  const buyNow = () => {};

  // customerReviewのreviewValueの合計を計算
  const totalReviewValue = props.customerReview.reduce(
    // reduceメソッド：配列内の各要素に対して繰り返し処理
    //引数total：ループの途中で合計値を保持する。各要素の処理が行われるたびに更新される。
    (total, review) => total + review.reviewValue,
    0 // 初期値
  );
  const averageReviewValue = totalReviewValue / props.customerReview.length;

  // リファクタ付与
  // 画像を拡大表示させるために必要な関数
  const [modalboxOpen, setModalboxOpen] = useState<boolean>(false);

  const manipulateModalbox = () => {
    setModalboxOpen(!modalboxOpen);
  };

  return (
    <>
      {modalboxOpen ? (
        <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-black bg-opacity-80">
          <button className="text-white ml-80" onClick={manipulateModalbox}>
            <ClearIcon fontSize="large" />
          </button>
          <Image src={props.goods.path} alt="" width={1000} height={0} />
        </div>
      ) : (
        <>
          <div className="text-center my-4">
            {/* 画像 */}
            <div onClick={manipulateModalbox}>
              <DetailImage path={props.goods.path} />
            </div>
            {/* 商品名 */}
            <GoodsDescription description={props.goods.description} />
          </div>
          {/* 値段 数量等 */}
          <div className="flex text-center ml-10">
            <div className="">
              <DetailPrice price={props.goods.price} />
              <DetailReview value={averageReviewValue.toFixed(1)} />
            </div>
            <div className="">
              {/* 数量選択 */}
              <DetailSelect
                onSelectChange={handleSelectChange} // 数量が変更されたときに呼び出される関数を渡す
                selectedQuantity={selectedQuantity} // 選択された数量をDetailSelectに渡す
              />
            </div>
          </div>
          <div className=" text-center my-12">
            <Link href="/cart">
              <button
                className="w-80 h-12 rounded-[100vh] bg-[#e0f65c] m-4"
                onClick={addToCart}
              >
                カートに入れる
              </button>
            </Link>
            <Link href="/payment">
              <button
                className="w-80 h-12 rounded-[100vh] bg-[#ff9900] m-4"
                onClick={buyNow}
              >
                今すぐ買う
              </button>
            </Link>
          </div>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab
                    label={<span className="text-xl">詳細</span>}
                    value="1"
                    sx={{ marginRight: "30px" }}
                  />
                  <Tab
                    label={<span className="text-xl">レビュー</span>}
                    value="2"
                    sx={{ marginLeft: "30px" }}
                  />
                </TabList>
              </Box>
              <Box>
                <TabPanel value="1">
                  <DetailGoodsInfo info={props.info} />
                </TabPanel>
                <TabPanel value="2" sx={{ marginLeft: "15%" }}>
                  <h1 className="text-2xl">カスタマーレビュー</h1>
                  <div className="flex">
                    <div className="flex items-center">
                      <Rating
                        name="half-rating-read"
                        defaultValue={averageReviewValue}
                        precision={0.01}
                        readOnly
                        sx={{ paddingTop: "2px" }}
                      />
                    </div>
                    <p className="flex flex-col items-center text-xl ml-2">
                      {/* 平均値を小数点第2位を四捨五入して求めた値です。 */}
                      5つのうち{averageReviewValue.toFixed(1)}つ
                    </p>
                  </div>
                  {props.customerReview.map((review, index) => (
                    <DetailCustomerReview
                      key={index}
                      iconPath={review.iconPath}
                      username={review.username}
                      reviewValue={review.reviewValue}
                      title={review.title}
                      date={review.date}
                      imageMoviePath={review.imageMoviePath}
                      addition={review.addition}
                    />
                  ))}
                </TabPanel>
              </Box>
            </TabContext>
          </Box>
        </>
      )}
    </>
  );
};
