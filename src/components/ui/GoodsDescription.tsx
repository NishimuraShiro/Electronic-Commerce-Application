import React from "react";

type GoodsDescriptionProps = {
  description: string;
};

export const GoodsDescription = (props: GoodsDescriptionProps) => {
  return (
    <div className="my-2">
      <h1 className="text-[20px]">{props.description}</h1>
    </div>
  );
};
