import React from "react";
import { ReviewProductImage } from "./ui/ReviewProductImage";
import { ReviewProductesDcription } from "./ui/ReviewProductesDcription";
import { ReviewEvaluation } from "./ui/ReviewEvaluation";
import { ReviewTitle } from "./ui/ReviewTitle";
import { ReviewAddImageMovie } from "./ui/ReviewAddImageMovie";
import { ReviewAddition } from "./ui/ReviewAddition";

export const Review = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/3">
          <ReviewProductImage path="/sampleImage/sample1.jpg" />
        </div>
        <div className="w-2/3 flex justify-center items-center">
          <ReviewProductesDcription description="ダンベル可変式 5kg 10kg 15kg スチール製ダンベル可変式 5kg 10kg 15kg スチーダンベル可変式 5kg 10kg 15kg スチーダンベル可変式 5kg 10kg 15kg スチール製" />
        </div>
      </div>
      <div className="mt-8">
        <div className="my-16">
          <ReviewEvaluation />
        </div>
        <div className="my-16">
          <ReviewTitle />
        </div>
        <div className="my-16">
          <ReviewAddition />
        </div>
        <div className="my-16">
          <ReviewAddImageMovie />
        </div>
        <div className="flex justify-center mt-10">
          <button className="text-xl font-bold  rounded-[100vh] px-10 py-4 bg-teal-400">
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};
