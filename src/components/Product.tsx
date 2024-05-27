import React from "react";
import Link from "next/link";
import { ProductImage } from "./ui/ProductImage";
import { ProductName } from "./ui/ProductName";
import { ProductPrice } from "./ui/ProductPrice";
import { ProductReview } from "./ui/ProductReview";
import { ProductStock } from "./ui/ProductStock";
import { ProductDescription } from "./ui/ProductDescription";

// 非同期処理の値を持ってくる。
const MetaData = [
  {
    path: "/sampleImage/sample1.jpg",
    name: "ダンベル可変式 5kg 10kg 15kg スチール製 ああああああああああああああああああああああああああああああaaaaaaaaaaaダンベル可変式 5kg 10kg 15kg スチール製 ああああああああああああああああああああああああああああああaaaaaaaaaaa",
    price: 1500,
    value: 4.35,
    stock: 5,
    descripton:
      "sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報",
  },
  {
    path: "/sampleImage/sample2.jpg",
    name: "ダンベル可変式 5kg 10kg 15kg スチール製 ああああああああああああああああああああああああああああああaaaaaaaaaaaダンベル可変式 5kg 10kg 15kg スチール製 ああああああああああああああああああああああああああああああaaaaaaaaaaa",
    price: 1500,
    value: 4.35,
    stock: 5,
    descripton:
      "sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報sample詳細情報",
  },
];

export const Product = () => {
  return (
    <>
      <ul>
        {MetaData.map((item, index) => (
          <li key={index}>
            <Link href="/detail">
              <div className="w-full flex  my-4">
                <div className="w-1/2 mr-2 flex justify-center ">
                  <ProductImage path={item.path} />
                </div>
                <div className="w-1/2 ml-2 my-1 flex flex-col justify-center">
                  <ProductName productName={item.name} />
                  <ProductPrice productPrice={item.price} />
                  <ProductReview value={item.value} />
                  <ProductStock productStock={item.stock} />
                  <ProductDescription productDescription={item.descripton} />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
