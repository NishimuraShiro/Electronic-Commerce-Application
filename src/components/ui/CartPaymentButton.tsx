import Link from "next/link";
import React from "react";

export const CartPaymentButton = () => {
  return (
    <div className="flex justify-center my-10">
      <Link href="/payment">
        <button className="text-[25px] px-12 py-[1px] rounded-[100vh] bg-[#e0f65c] ">
          レジに進む（2個の商品）
        </button>
      </Link>
    </div>
  );
};
