import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const ReviewTitle = () => {
  return (
    <>
      <h1 className="font-bold text-2xl ml-6">レビュータイトル</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { ml: 2, mt: 2, width: "326px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="最も伝えたいポイントは何ですか？"
        />
      </Box>
    </>
  );
};
