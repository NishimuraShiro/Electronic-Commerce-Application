import Link from "next/link";
import React from "react";

type Props = {
  name: string;
  postCode: string;
  address: string;
  country: string;
  telephone: number;
  deliveryMethod: string;
};
export const AccountPersonalInfo = ({
  name,
  postCode,
  address,
  country,
  telephone,
  deliveryMethod,
}: Props) => {
  return (
    <div className="mb-4">
      <h1 className="text-[25px] font-bold text-center my-4">個人情報</h1>
      <table>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">名前</span>
            </td>
            <td className="text-[25px] w-1/12">{name}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">郵便番号</span>
            </td>
            <td className="text-[25px] w-1/12">{postCode}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">住所</span>
            </td>
            <td className="text-[25px] w-1/12">{address}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">国</span>
            </td>
            <td className="text-[25px] w-1/12">{country}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">電話</span>
            </td>
            <td className="text-[25px] w-1/12">{telephone}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[60px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">配送指示</span>
            </td>
            <td className="text-[25px] w-1/12">{deliveryMethod}</td>
          </tr>
        </thead>
      </table>
      <div className="mt-4">
        <button className="font-medium text-[25px] ml-20 rounded-[100vh] px-4 bg-[#eeeeee]">
          削除
        </button>
        <Link
          href={"/accountInfo"}
          className="font-medium text-[25px] ml-20 rounded-[100vh] px-4 bg-[#eeeeee]"
        >
          変更
        </Link>
      </div>
    </div>
  );
};
