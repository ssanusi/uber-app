import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const logoStyles = makeStyles((theme: Theme) =>
createStyles({
  icon: {
    margin: theme.spacing(1),
    height: "5rem",
    width: "5rem",
    fontSize: "large",
    [theme.breakpoints.down("sm")]: {
      height: "4rem",
      weight: "4rem"
    }
  },
})
);

