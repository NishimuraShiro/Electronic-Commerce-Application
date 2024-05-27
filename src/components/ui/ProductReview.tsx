"use client";
import React from "react";
import { Rating } from "@mui/material";

type ReviewValue = { value: number };
export const ProductReview = (props: ReviewValue) => {
  return (
    <div className="flex my-1">
      <Rating
        name="half-rating-read"
        value={props.value}
        precision={0.01}
        readOnly
        sx={{ paddingTop: "2px" }}
      />
    </div>
  );
};
