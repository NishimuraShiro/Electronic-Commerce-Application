import React from "react";
import { Product } from "./Product";
import { CartSubtotal } from "./ui/CartSubtotal";
import { CartPaymentButton } from "./ui/CartPaymentButton";
import { CartProductQuantity } from "./ui/CartProductQuantity";
import { CartDeleteButton } from "./ui/CartDeleteButton";

export const Cart = () => {
  return (
    <div className="mb-20">
      <div className="my-16">
        <CartSubtotal subTotal={1500 * 2} />
        <CartPaymentButton />
      </div>
      <Product />
      <div className="flex justify-evenly mt-10 mb-20">
        <CartProductQuantity />
        <CartDeleteButton />
      </div>
      <CartPaymentButton />
    </div>
  );
};
