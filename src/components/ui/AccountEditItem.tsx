"use client";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

const MetaData = [
  {
    title: "お名前",
    type: "text",
    placeholder: "例： 田中 太郎"
  },
  {
    title: "ID",
    type: "text",
    placeholder: "例: 123abc"
  },
  {
    title: "パスワード",
    type: "password",
    placeholder: "8文字以上16文字以内の英数字一字以上"
  },
  {
    title: "メール",
    type: "text",
    placeholder: "例: abcd123@gmail.com"
  },
  {
    title: "電話番号",
    type: "text",
    placeholder: "例: 012-3456-7890"
  },
  {
    title: "郵便番号",
    type: "text",
    placeholder: "例: 123-4567"
  },
  {
    title: "住所",
    type: "text",
    placeholder: "例: 東京都1番区2丁目3-4"
  },
  {
    title: "アパート・ビル名",
    type: "text",
    placeholder: "例: 都会ビル8階"
  }
];

export const AccountEditItem = () => {
  const [uploadImage, setUploadImage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  // ファイルをアップロードする関数
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    // ファイルの取得
    const fileObject = e.target.files[0];

    if (fileObject) {
      // 選択されたファイルをwindow.URL.createObjectURL()に渡してuseState()を更新
      const fileURL = window.URL.createObjectURL(fileObject);

      // 選択されたファイルのURLを文字列型に変換してuseState()を更新
      setUploadImage(fileURL);

      // 選択されたファイルをformDataにappendする変数に格納する
      setImage(fileObject);
    }
  };

  return (
    <>
      <ul>
        <li className="flex w-full h-32">
          <h1 className="w-1/4 flex items-center font-bold">アイコン</h1>
          <div className="h-32 relative justify-center">
            <div className="w-32 h-32">
              <Image
                src={uploadImage}
                alt=""
                className="aspect-square object-cover rounded-full"
                fill
              />
            </div>
            <label htmlFor="fileUpload">
              <div className="w-32 h-32">
                <Image
                  src="/AddImage.png"
                  className="opacity-10 hover:opacity-50 w-[30%] absolute inset-x-[36%] inset-y-[36%] rounded-full"
                  alt=""
                  fill
                />
              </div>
              <input
                type="file"
                id="fileUpload"
                className="hidden"
                onChange={onFileInputChange}
              />
            </label>
          </div>
        </li>

        {MetaData.map((item) => (
          <li key={item.title} className="my-4">
            <div className="border-b border-[#b9b9bb] my-2 flex flex-col">
              <h1 className="font-bold">{item.title}</h1>
              <input
                type={item.type}
                className="w-full py-2"
                placeholder={item.placeholder}
              />
            </div>
          </li>
        ))}

        <li>
          <h1 className="font-bold">お支払い方法</h1>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="クレジットVISA"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="クレジットVISA"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28
                    }
                  }}
                />
              }
              label="クレジットVISA"
            />
            <FormControlLabel
              value="銀行振込み"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28
                    }
                  }}
                />
              }
              label="銀行振込み"
            />
            <FormControlLabel
              value="コンビニ振込み"
              control={
                <Radio
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: 28
                    }
                  }}
                />
              }
              label="コンビニ振込み"
            />
          </RadioGroup>
        </li>
      </ul>
    </>
  );
};
