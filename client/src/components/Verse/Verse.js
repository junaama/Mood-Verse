import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SwipeableViews from 'react-swipeable-views';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Verse = (props) => {
  const [verse, setVerse] = useState([]);
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  let randomNum = Math.floor(Math.random() * 6);
  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/verses`);
        setVerse(res.data.verses);
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, []);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const output = verse.map((item, ind) => {
    if (props.mood) {
      return (
        <div key={`${ind} div`}>
          <p key={`${ind} path`}>{item[props.mood][randomNum].versePath}</p>
          <p key={`${ind} content`}>{item[props.mood][randomNum].content}</p>
        </div>
      );
    }
    return <p key={`${ind} p`}>No applicable mood.</p>;
  });
  return (
    <>
      {output}{" "}
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
            variant="fullWidth"
          >
            <Tab label="Plan" {...a11yProps(0)} />
            <Tab label="Verse" {...a11yProps(1)} />
            <Tab label="Playlist" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Plan
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Verse
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Playlist
        </TabPanel>
      </SwipeableViews>
      </div>
    </>
  );
};
export default Verse;
