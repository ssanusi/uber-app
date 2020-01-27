import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

interface Props {}

const footerStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    footer: {
      backgroundColor: theme.palette.primary.main,
      width: "100%",
      position: "relative",
      clear: "both",
      bottom: 0,
      height: "10.5rem"
    }
  })
);

const Footer: React.FC<Props> = () => {
  const classes = footerStyles();
  return <Box className={classes.footer}></Box>;
};

export default Footer;
