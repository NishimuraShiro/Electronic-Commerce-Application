import { Grid, Link } from "@mui/material";

export const ActionLink = (props: { href: string; label: string }) => {
  return (
    <Grid container className="mt-12" justifyContent="center">
      <Link href={props.href} variant="subtitle1">
        {props.label}
      </Link>
    </Grid>
  );
};
