"use client";
import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const CartProductQuantity = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const handleDecrease = () => {
    if (quantity < 2) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="flex">
      <div className="flex items-center border border-black px-3">
        <RemoveIcon fontSize="large" onClick={handleDecrease} />
      </div>
      <h1 className="text-[30px] border border-black px-3">{quantity}</h1>
      <div className="flex items-center border border-black px-3">
        <AddIcon fontSize="large" onClick={() => setQuantity(quantity + 1)} />
      </div>
    </div>
  );
};
