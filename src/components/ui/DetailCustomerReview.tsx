"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Rating, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

type ReviewInfo = {
  iconPath: string;
  username: string;
  reviewValue: number;
  title: string;
  date: Date;
  imageMoviePath: string[];
  addition: string;
};

export const DetailCustomerReview = (props: ReviewInfo) => {
  const [firstSwiper, setFirstSwiper] = useState<any>(null);
  const [secondSwiper, setSecondSwiper] = useState<any>(null);
  return (
    <div className="my-8">
      <div className="flex">
        <Image src={`${props.iconPath}`} alt="" width={70} height={70} />
        <div className="flex items-center">
          <h1 className="text-xl">{props.username}</h1>
        </div>
      </div>
      <Stack spacing={1}>
        <Rating
          name="half-rating-read"
          defaultValue={props.reviewValue}
          precision={0.5}
          readOnly
        />
      </Stack>
      <h1 className="font-bold text-2xl">{props.title}</h1>
      <h1 className="text-xl text-[#8a8a8e]">
        {props.date.toLocaleDateString()}にレビュー済み
      </h1>
      {/* 条件付きレンダリング：props.imageMoviePathが存在したら、()内を表示させる */}

      {props.imageMoviePath && props.imageMoviePath.length > 0 && (
        <Swiper
          modules={[Navigation, Controller]}
          navigation
          loop
          onSwiper={setFirstSwiper}
          controller={{ control: secondSwiper }}
          className="my-2 text-3xl"
        >
          {props.imageMoviePath.map((path, index) => {
            // pathが存在しない場合、何も表示しない
            if (!path) {
              return null;
            }
            const fileExtension = path.split(".").pop()?.toLowerCase(); // 拡張子を取得
            const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"]; // 画像の拡張子リスト
            const videoExtensions = ["mp4", "webm", "ogg"]; // 動画の拡張子リスト
            // pathの拡張子が画像の場合
            if (fileExtension && imageExtensions.includes(fileExtension)) {
              return (
                <SwiperSlide key={index}>
                  <div className="max-h-40 flex justify-center">
                    <div className={`relative w-[200px] h-[150px]`}>
                      <Image
                        className="absolute object-contain"
                        src={path}
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
            // pathの拡張子が動画の場合
            else if (fileExtension && videoExtensions.includes(fileExtension)) {
              return (
                <SwiperSlide key={index}>
                  <div className="max-h-32 flex justify-center">
                    <div className={`relative w-[200px] h-[150px]`}>
                      <video className="absolute object-cover" controls>
                        <source src={path} type={`video/${fileExtension}`} />
                        お使いのブラウザは動画をサポートしていません。
                      </video>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
            // 画像でも動画でもない場合、何も表示しない
            else {
              return null;
            }
          })}
        </Swiper>
      )}
      <h1 className="text-xl mt-2">{props.addition}</h1>
    </div>
  );
};

/* 
// 以下は画像のみの挿入が可能になる。
{props.imageMoviePath.map((path, index) => (
          <SwiperSlide key={index}>
            <div className="max-h-32 flex justify-center">
              <div className={`relative w-[200px] h-[150px]`}>
                <Image
                  className="absolute object-contain"
                  src={path}
                  alt={""}
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        ))
*/
