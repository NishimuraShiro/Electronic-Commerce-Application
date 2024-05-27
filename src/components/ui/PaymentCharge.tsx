import React from "react";
type ChargeProps = { charge: { subTotal: number; deliveryCharge: number } };

// フォーマット関数
const formatCurrency = (value: number) => {
  return value.toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
    minimumFractionDigits: 0,
  });
};

export const PaymentCharge = (props: ChargeProps) => {
  const formattedSubtotal = formatCurrency(props.charge.subTotal);
  const formattedDeliveryCharge = formatCurrency(props.charge.deliveryCharge);
  const formattedTotal = formatCurrency(
    props.charge.subTotal + props.charge.deliveryCharge
  );
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td className="w-1/2 text-2xl font-semibold leading-loose">
              商品の小計
            </td>
            <td className="w-1/2 text-2xl leading-loose pl-10">
              {formattedSubtotal}
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td className="w-1/2 text-2xl font-semibold leading-loose">
              配送料・手数料
            </td>
            <td className="w-1/2 text-2xl leading-loose pl-10">
              {formattedDeliveryCharge}
            </td>
          </tr>
        </thead>
        <thead>
          <tr>
            <td className="w-1/2 text-2xl font-semibold leading-loose">
              ご請求額
            </td>
            <td className="w-1/2 text-2xl leading-loose pl-10">
              {formattedTotal}
            </td>
          </tr>
        </thead>
      </table>
    </div>
  );
};
