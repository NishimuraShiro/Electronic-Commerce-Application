import React from "react";
import { Rating } from "@mui/material";

type ReviewValue = { value: string };
// リファクタ
export const DetailReview = (props: ReviewValue) => {
  return (
    <div className="flex mt-2">
      <Rating
        name="half-rating-read"
        value={parseFloat(props.value)}
        precision={0.01}
        readOnly
        sx={{ paddingTop: "2px" }}
      />
    </div>
  );
};
