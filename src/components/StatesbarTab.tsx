"use client";
import React, { useEffect, useState } from "react";
import Styles from "./CSS/StatesBar.module.css";
import SignalCellularAltSharpIcon from "@mui/icons-material/SignalCellularAltSharp";
import WifiSharpIcon from "@mui/icons-material/WifiSharp";

// コメント部分は時計の実装の際に利用する可能性があるので、残しています。
// // 現在時刻表示
// const useClock = () => {
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     const updateCurrentTime = () => {
//       setCurrentTime(new Date());
//     };

//     // コンポーネントが最初にマウントされた時に実行する処理
//     updateCurrentTime();

//     // 一分毎にupdateCurrentTimeを呼び出す
//     const intervalId = setInterval(updateCurrentTime, 60000);

//     // アンマウント時にクリアにする
//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);
//   return [currentTime];
// };

export const StatesbarTab = () => {
  // const [currentTime] = useClock();
  return (
    <div className="w-full h-[44px] fixed top-0">
      {/* <div>{currentTime.toLocaleTimeString()}</div> */}
      <div className="flex justify-end mx-auto space-x-2 mt-2 mr-8">
        <SignalCellularAltSharpIcon />
        <WifiSharpIcon />
        <div className={Styles.battery}></div>
      </div>
    </div>
  );
};
