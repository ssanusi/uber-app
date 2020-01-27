import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const tabPanelStyles = makeStyles((theme: Theme) =>
  createStyles({
    panelContainer: {
      width: "80%",
      height: "100%",
      borderRadius: 0,
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around"
    },
    button: {
      borderRadius: 0,
      height: "50px",
      width: "200px",
      textTransform: "none",
      fontSize: "20px"
    }
  })
);
