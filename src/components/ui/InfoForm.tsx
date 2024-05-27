import React from "react";

type Props = { title: string; placeholder: string; type: string };
export const InfoForm = ({ title, placeholder, type }: Props) => {
  return (
    <div className="border-b border-[#b9b9bb] my-2 flex flex-col">
      <h1 className="font-bold">{title}</h1>
      <input
        type={`${type}`}
        className="w-full py-2"
        placeholder={`${placeholder}`}
      />
    </div>
  );
};
