import Image from "next/image";
import React from "react";

type InfoIconProps = {
  path: string;
};

export const InfoIcon = (props: InfoIconProps) => {
  return (
    <div className="flex flex-col justify-center m-4">
      <Image src={props.path} alt="" width={100} height={100} />
    </div>
  );
};
