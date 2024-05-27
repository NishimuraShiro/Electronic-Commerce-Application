import React from "react";

type Props = {
  date: Date;
};

export const HistoryDeliveryDate = ({ date }: Props) => {
  // 現在時刻を記しています。今後は配達日時に変える必要があります。
  const formattedDate = date.toLocaleDateString();
  return (
    <div className="flex">
      <h1 className="font-bold">{formattedDate}</h1>
      <span>に配達しました。</span>
    </div>
  );
};
