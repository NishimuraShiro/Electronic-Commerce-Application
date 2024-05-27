import React from "react";

type Props = { date: Date; notification: string };
// 通知の種類を表示させるための実装と購入日時を決定する実装必要
export const AccountNotification = ({ date, notification }: Props) => {
  const formattedTime = date.toLocaleString();
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-[25px]">
        <span>{formattedTime}</span>
        {notification}
      </h1>
    </div>
  );
};
