"use client"; // クライアントサイド
import React, { useRef, useState } from "react";
import Image from "next/image";

// 画像ファイルのプレビューを表示するコンポーネント
const ImagePreview: React.FC<{ file: File }> = ({ file }) => {
  const imageUrl = URL.createObjectURL(file);
  return (
    <div className="mt-2">
      <Image
        src={imageUrl}
        alt={file.name}
        className="max-w-full h-auto"
        width={200}
        height={200}
      />
    </div>
  );
};

// 動画ファイルのプレビューを表示するコンポーネント
const VideoPreview: React.FC<{ file: File }> = ({ file }) => {
  const videoUrl = URL.createObjectURL(file);
  return (
    <div className="mt-2">
      <video width="320" height="240" controls>
        <source src={videoUrl} type={file.type} />
      </video>
    </div>
  );
};

export const ReviewAddImageMovie: React.FC = () => {
  // 選択したファイルを配列に格納する処理
  const [uploadFiles, setUploadFiles] = useState<File[]>([]);
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles: FileList | null = e.target.files;
    const fileArray: File[] = [];
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        fileArray.push(selectedFiles[i]);
      }
      setUploadFiles(fileArray);
    }
  };

  // 選択した画像動画を表示できるようになるまでの処理
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleAddClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // 選択した画像動画を削除する処理
  const clearSelectedFiles = () => {
    setUploadFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl text-center mb-4">
        動画または写真の共有
      </h1>
      <input
        type="file"
        ref={fileInputRef}
        onChange={onFileInputChange}
        className="hidden"
        multiple
      />
      <div className="flex mt-2 justify-center">
        <button
          onClick={handleAddClick}
          className="text-xl mr-12 font-bold rounded-[100vh] px-10 py-4  bg-[#7dff7d]"
        >
          追加
        </button>
        <button
          onClick={clearSelectedFiles}
          className="text-xl font-bold  rounded-[100vh] px-10 py-4 bg-[#b1b1b1]"
        >
          クリア
        </button>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {uploadFiles.map((file, index) => {
            if (file.type.startsWith("image/")) {
              return <ImagePreview key={index} file={file} />;
            } else if (file.type.startsWith("video/")) {
              return <VideoPreview key={index} file={file} />;
            } else {
              return (
                <div key={index}>
                  <p>{file.type}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
