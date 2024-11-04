import React from "react";
import { Grid, Link } from "@mui/material";

export const LoginLink = () => {
  return (
    <Grid container className="mt-8" justifyContent="center">
      <Link href="../login" variant="subtitle1">
        すでにアカウントをお持ちの方はこちらへ
      </Link>
    </Grid>
  );
};
