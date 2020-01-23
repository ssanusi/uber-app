import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Hidden
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { AccountOutline, Uber, Web } from "mdi-material-ui";

interface Props {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    appBar: {
      [theme.breakpoints.down("sm")]: {
        height: "15%"
      }
    },
    menuButton: {
      display: "none"
    },
    title: {
      flexGrow: 1
    },
    text: {
      margin: "0.3rem",
      fontSize: "15px"
    },
    button: {
      borderRadius: "0",
      margin: "1rem",
      backgroundColor: theme.palette.secondary.main,
      textTransform: "inherit",
      [theme.breakpoints.down("sm")]: {
        margin: "0.2rem"
      }
    },
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
    toolBar: {
      display: "flex",
      width: "60%",
      height: "80%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignSelf: "center",
      [theme.breakpoints.down("sm")]: {
        width: "100%"
      }
    },
    ToolbarItem: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        alignSelf: "center",
        marginRight: "10px"
      }
    }
  })
);

const Header: React.FC<Props> = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Box className={classes.ToolbarItem}>
            <Uber className={classes.icon} />
            <Hidden smDown>
              <Typography className={classes.text}>Product</Typography>
              <Typography className={classes.text}>Company</Typography>
              <Typography className={classes.text}>Safety</Typography>
              <Typography className={classes.text}>help</Typography>
            </Hidden>
          </Box>
          <Box className={classes.ToolbarItem}>
            <Hidden smDown>
              <Web></Web>
              <Typography className={classes.text}>EN</Typography>
            </Hidden>
            <Hidden smDown>
              <AccountOutline></AccountOutline>
            </Hidden>
            <Typography variant="inherit" className={classes.text}>
              Log in
            </Typography>
            <Button className={classes.button}>
              <Typography>Sign up</Typography>
            </Button>
            <Hidden smUp>
              <IconButton edge="end" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Hidden>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
