import React from "react";
import { InfoIcon } from "./InfoIcon";

const MetaData = [
  {
    label: "アバター",
    data: "/sampleImage/icon_sample.jpeg",
  },
  {
    label: "お名前",
    data: "田中 太郎",
  },
  {
    label: "ID",
    data: "123abc",
  },
  {
    label: "パスワード",
    data: "aaaa00KK",
  },
  {
    label: "メール",
    data: "abcd123@gmail.com",
  },
  {
    label: "電話番号",
    data: "012-3456-7890",
  },
  {
    label: "郵便番号",
    data: "123-4567",
  },
  {
    label: "住所",
    data: "東京都1番区2丁目3-4",
  },
  {
    label: "アパート・ビル名",
    data: "都会ビル8階",
  },
];

export const AccountEditConfirmItem = () => {
  return (
    <ul className="">
      {MetaData.map((item) => (
        <li key={item.label} className="flex my-4">
          <div className="w-32 text-lg ml-4 text-left">{item.label}</div>
          {item.label === "アバター" ? (
            <div className="w-40 text-lg ml-8 text-left">
              <InfoIcon path="/sampleImage/icon_sample.jpeg" />
            </div>
          ) : (
            <div className="w-40 text-lg ml-8 text-left">{item.data}</div>
          )}
        </li>
      ))}
    </ul>
  );
};
