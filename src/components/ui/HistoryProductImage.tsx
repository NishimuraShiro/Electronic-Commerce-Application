import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  path: string;
};

export const HistoryProductImage = ({ path }: Props) => {
  return (
    <>
      <Link href={"/detail"}>
        <div
          className="flex flex-col items-center justify-center rounded-lg m-2"
          style={{
            // ボーダースタイル
            border: "1px solid  rgb(249 250 251)",
            top: "-3px",
            boxShadow: " 0 2px 3px rgba(0, 0, 0, 0.3)",
            overflow: "hidden",
          }}
        >
          <div className="w-[140px] h-[140px] rounded-lg flex items-center justify-center">
            <Image
              className="absolute object-cover"
              src={`${path}`}
              alt=""
              width={90}
              height={90}
            />
          </div>
        </div>
      </Link>
    </>
  );
};
