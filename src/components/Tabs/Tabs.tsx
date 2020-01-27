import React, { useState } from "react";
import { Tab, Tabs, Box } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import { tabsStyles } from "./Tabs.styles";
import TabPanel from "./TabPanel";
import Icon from "../Icon";
import { tabData } from "./tabAssets";

interface Props {}

function a11yProps(index: any) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`
  };
}

const TabsContainer: React.FC<Props> = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const classes = tabsStyles();
  return (
    <Box display="flex" justifyContent="center">
      <CardMedia image={tabData[value].bgImg} className={classes.cardMedia}>
        <Box width="90%" paddingTop="40px">
          <Tabs
            value={value}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="icon tabs example"
            classes={{
              root: classes.tabsContainer,
              flexContainer: classes.tabs
            }}
          >
            {tabData.map((tab, index) => (
              <Tab
                label={tab.label}
                classes={{ root: classes.tab }}
                icon={<Icon src={tab.iconSrc} />}
                {...a11yProps(0)}
                key={index}
              />
            ))}
          </Tabs>
          <Box className={classes.tabPanelContainer}>
            <TabPanel
              value={value}
              index={0}
              title={tabData[value].title}
              body={tabData[value].body}
              buttonLabel={tabData[value].buttonLabel}
              linkLabel={tabData[value].linkLabel}
            />
          </Box>
        </Box>
      </CardMedia>
    </Box>
  );
};

export default TabsContainer;
