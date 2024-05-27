import React from "react";

type ReviewProductesDcriptionProps = {
  description: string;
};

export const ReviewProductesDcription = (
  Props: ReviewProductesDcriptionProps
) => {
  return (
    <div>
      <h1 className="font-bold text-[18px] line-clamp-3">
        {Props.description}
      </h1>
    </div>
  );
};
