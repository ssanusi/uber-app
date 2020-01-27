import React from "react";
import { Paper, Typography, Button } from "@material-ui/core";
import { tabPanelStyles } from "./tabPanel.styles";

interface Props {
  children?: React.ReactNode;
  index: any;
  value: any;
  title: string;
  body: string;
  buttonLabel: string;
  linkLabel: string;
}

const TabPanel: React.FC<Props> = ({ title, body, buttonLabel, linkLabel }) => {
  const classes = tabPanelStyles();
  return (
    <Paper className={classes.panelContainer}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h6">{body}</Typography>
      <Button
        size="medium"
        color="primary"
        variant="contained"
        className={classes.button}
      >
        {buttonLabel}
      </Button>
      <Typography variant="h6">{linkLabel}</Typography>
    </Paper>
  );
};

export default TabPanel;
