import Image from "next/image";
import React from "react";

type DetailImageProps = {
  path: string;
};

export const DetailImage = (props: DetailImageProps) => {
  return (
    <div className="relative w-fill h-[400px]">
      <Image
        className="absolute object-contain"
        src={`${props.path}`}
        alt={""}
        fill
      />
    </div>
  );
};
