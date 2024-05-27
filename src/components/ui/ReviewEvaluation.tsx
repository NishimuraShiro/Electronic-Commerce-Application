import React from "react";
import { Rating, Stack } from "@mui/material";

export const ReviewEvaluation = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold mb-2 ml-6 text-2xl">総合評価</h1>
      <div className="ml-4">
        <Rating
          name="half-rating"
          defaultValue={1}
          precision={0.5}
          size="large"
        />
      </div>
    </div>
  );
};
