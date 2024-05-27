import { Box, TextField } from "@mui/material";
import React from "react";

export const ReviewAddition = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl ml-6">レビューの追加</h1>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            mt: 2,
            ml: 2,
            textAlign: "center",
            width: "40ch",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id=""
            multiline
            rows={10}
            placeholder="気に入ったこと、気に入らなかったことは何ですか？この商品を使ってみてどうでしたか？"
            inputProps={{ maxLength: 326 }}
          />
        </div>
      </Box>
    </div>
  );
};
