import React from "react";

type GoodsInfoType = { info: string };
export const DetailGoodsInfo = (props: GoodsInfoType) => {
  return (
    <div className="flex flex-col">
      <h1>{props.info}</h1>
    </div>
  );
};
