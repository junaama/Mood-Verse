import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
// import PropTypes from "prop-types";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import SwipeableViews from 'react-swipeable-views';
import star from '../Nav/star.png'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './verse.css'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

const Verse = (props) => {
  const { user } = useContext(UserContext);
  let randomNum = Math.floor(Math.random() * 6);
  const [verse, setVerse] = useState([]);
  // const [activeTab, setActiveTab] = useState("1");

  // const toggle = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab);
  // };

  
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
  // const classes = useStyles();
  // const [value, setValue] = React.useState(0);
  // const theme = useTheme();
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  // const handleChangeIndex = (index) => {
  //   setValue(index);
  // };
  const handleSaveUpdate = (verse) => {
    //do something
    props.setSavedVerses(verse)
  }
  console.log("props mood", props.mood)
  const output = verse.map((item, ind) => {
    
    
    if (props.mood) {
      let currentVerse = item[props.mood][randomNum]
      return (
        <>
        <div key={`${ind} div`}>
          <p key={`${ind} path`}>{currentVerse.versePath}</p>
          <p key={`${ind} content`}>{currentVerse.content}</p>
        </div>
        <div><button onClick={handleSaveUpdate(currentVerse.versePath)}><img src={star} alt="favorite button"></img></button></div>
        </>
      );
    }
    return <p key={`${ind} p`}>Set your current mood in the home page!</p>;
  });
  
  return (
    <div className='verse-dash'>
      {user.user ? ( <>{output}{" "} </>) : (<> <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link></>)
     
   
    }
    </div>
  );
};
export default Verse;
