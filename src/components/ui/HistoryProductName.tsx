import React from "react";

type HistoryProductNameProps = {
  name: string;
};

export const HistoryProductName = (props: HistoryProductNameProps) => {
  return (
    <div>
      <h1 className="font-bold text-[15px] line-clamp-3">{props.name}</h1>
    </div>
  );
};
