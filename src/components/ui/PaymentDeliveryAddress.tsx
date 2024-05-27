import Link from "next/link";
import React from "react";

const METADATA = [
  {
    label: "郵便番号",
    address: "",
  },
];

type AddressProps = {
  addressInfo: {
    postCode: string;
    address: string;
    buildingName: string;
    phoneNumber: number;
  };
};
export const PaymentDeliveryAddress = (props: AddressProps) => {
  return (
    <div className="border-t border-t-black">
      <h1 className="text-[25px] font-bold">お届け先</h1>
      <table>
        <thead>
          <tr className="leading-[70px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">郵便番号</span>
            </td>
            <td className="text-[25px] w-1/12">{props.addressInfo.postCode}</td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[70px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">住所</span>
            </td>
            <td className="text-[25px] w-1/12 leading-tight">
              {props.addressInfo.address}
            </td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[70px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">アパート名</span>
            </td>
            <td className="text-[25px] w-1/12 leading-tight">
              {props.addressInfo.buildingName}
            </td>
          </tr>
        </thead>
        <thead>
          <tr className="leading-[70px]">
            <td className="text-[25px] w-1/12">
              <span className="font-medium px-1">電話</span>
            </td>
            <td className="text-[25px] w-1/12">
              {props.addressInfo.phoneNumber}
            </td>
          </tr>
        </thead>
      </table>
      <div className="flex justify-center mt-5">
        <Link
          href={"/accountEdit"}
          className="w-full text-[25px] text-center py-[1px] rounded-[100vh] bg-[#eeeeee]"
        >
          配送先の変更
        </Link>
      </div>
    </div>
  );
};
