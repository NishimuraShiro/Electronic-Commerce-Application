import React from "react";
import { PaymentCharge } from "./ui/PaymentCharge";
import { PaymentOrderButton } from "./ui/PaymentOrderButton";
import { PaymentDeliveryAddress } from "./ui/PaymentDeliveryAddress";

export const Payment = () => {
  return (
    <div>
      <PaymentCharge charge={{ subTotal: 1500, deliveryCharge: 0 }} />
      <PaymentOrderButton />
      <PaymentDeliveryAddress
        addressInfo={{
          postCode: "123-456",
          address: "東京都○○区1丁目2-3",
          buildingName: "○○ビル４階",
          phoneNumber: 123456,
        }}
      />
      <PaymentOrderButton />
    </div>
  );
};
