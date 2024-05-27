"use client";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// リファクタ
type DetailSelectProps = {
  // 親コンポーネントから数量の変更を通知するためのコールバック関数
  onSelectChange: (value: number) => void;
  // 選択された数量の値
  selectedQuantity: number;
};

export const DetailSelect: React.FC<DetailSelectProps> = ({
  onSelectChange,
  selectedQuantity,
}) => {
  // セレクトボックスの値が変更されたときに呼び出される関数
  const handleChange = (event: SelectChangeEvent) => {
    const selectedQuantity = Number(event.target.value); // 選択された値を数値に変換
    onSelectChange(selectedQuantity); // 親コンポーネントに値を渡す
  };

  return (
    <div>
      {/* <FormControl */}
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        {/* セレクトボックスのラベル */}
        <InputLabel id="demo-simple-select-autoWidth-label">数量</InputLabel>
        {/* セレクトボックス */}
        <Select
          labelId="demo-simple-select-autoWidth-label"
          id="demo-simple-select-autoWidth"
          value={selectedQuantity.toString()} // 親コンポーネントから受け取った値を設定
          onChange={handleChange} // セレクトボックスの値が変更されたときにhandleChangeを呼び出す
        >
          {/* MenuItemはセレクトボックスの選択肢 */}
          <MenuItem value={1}>{1}</MenuItem>
          <MenuItem value={2}>{2}</MenuItem>
          <MenuItem value={3}>{3}</MenuItem>
          <MenuItem value={4}>{4}</MenuItem>
          <MenuItem value={5}>{5}</MenuItem>
          <MenuItem value={6}>{6}</MenuItem>
          <MenuItem value={7}>{7}</MenuItem>
          <MenuItem value={8}>{8}</MenuItem>
          <MenuItem value={9}>{9}</MenuItem>
          <MenuItem value={10}>{10}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
