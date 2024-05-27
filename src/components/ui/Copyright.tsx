import { Link, Typography } from "@mui/material";

export const Copyright = (props: any) => {
  return (
    <Typography
      className="mb-20"
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Nishimura Electronic Commerce Site</Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
