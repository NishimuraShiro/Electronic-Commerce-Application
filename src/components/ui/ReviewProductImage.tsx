import Image from "next/image";
import Link from "next/link";
import React from "react";

type ReviewProductImageProps = {
  path: string;
};

export const ReviewProductImage = (props: ReviewProductImageProps) => {
  return (
    <Link href={"/detail"}>
      <div className={`relative w-[75px] h-[112.5px]`}>
        <Image
          className="absolute object-contain"
          src={props.path}
          alt={""}
          fill
        />
      </div>
    </Link>
  );
};
