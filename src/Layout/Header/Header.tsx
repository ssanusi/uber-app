import React from "react";
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
import { AccountOutline, Web } from "mdi-material-ui";
import { headerStyles } from "./Header.styles";
import Logo from "../../components/Logo/Logo";

interface Props {}

const Header: React.FC<Props> = () => {
  const classes = headerStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <Box className={classes.ToolbarItem}>
          <Logo />
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
          <Hidden mdUp>
            <IconButton edge="end" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
