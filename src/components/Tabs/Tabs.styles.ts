import { makeStyles, createStyles, Theme } from "@material-ui/core";

export const tabsStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: {
      height: "772px",
      alignSelf: "center",
      display: "flex",
      justifyContent: "center",
      paddingTop: "64px",
      //marginRight: "90px",
      //marginLeft: "90px",
      width: "70%"

    },
    tabsContainer: {
      borderRadius: 0,
      backgroundColor: theme.palette.secondary.main,
      display: "flex",
      alignItems: "center",
      width: "100%",
      height: "100px",
      justifyContent: "space-evenly",
    },
    tabs: {
      width: "100%",
      height: "100%"
    },
    tab: {
      textTransform: "inherit",
      color: theme.palette.primary.main,
      minWidth: "auto"
    },
    tabPanelContainer: {
      maxWidth: "50%",
      height: "400px",
      alignSelf: "right"
    }
  })
);
