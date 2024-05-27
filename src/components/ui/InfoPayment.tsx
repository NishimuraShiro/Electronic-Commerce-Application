import React from "react";

export const InfoPayment = () => {
  return (
    <div className="border-b border-[#b9b9bb] my-2 flex flex-col">
      <h1 className="font-bold">お支払方法</h1>
      <div className="py-2">
        <label className="block">
          <input type="radio" name="option" />
          クレジットVISA
        </label>
        <label className="block">
          <input type="radio" name="option" />
          銀行振込み
        </label>
        <label className="block">
          <input type="radio" name="option" />
          コンビニ振込み
        </label>
      </div>
    </div>
  );
};
