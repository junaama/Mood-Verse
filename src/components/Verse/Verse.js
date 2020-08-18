import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import star from '../Nav/star.png'
import UserContext from "../../context/context";
import {Link} from 'react-router-dom'
import './verse.css'



const Verse = (props) => {
  const { user } = useContext(UserContext);
  // let randomNum = Math.floor(Math.random() * 6);
  const [verse, setVerse] = useState([]);

  console.log("cookie -", document.cookie)
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


  const userId = document.cookie.split("=")[1]
    console.log('user -', userId)

const handleSaveUpdate = async(verseId) =>{
    //do something
    // props.setSavedVerses({[props.mood]: verse})
    console.log("id,", verseId)
    try {
       await axios({
      method: "PUT",
      url: `${apiUrl}/api/users/${userId}/addVerses/${verseId}`,
      data: {['mood']: props.mood}
    })
    } catch (error) {
      console.error(error);
    }
  }
  console.log("props mood", props.mood)
  const output = verse.map((item, ind) => {
    
    let randomNum = Math.floor(Math.random() * 6);
    if (props.mood) {
      console.log(item[props.mood])
       if(item[props.mood] === undefined){
        return (
          <>
          No verse available for that mood.
          </>
        )
      }
      let currentVerse = item[props.mood][randomNum]
     
      console.log('cv -', currentVerse)
      return (
        <>
        <div key={`${ind} div`}>
          <p key={`${ind} path`}>{currentVerse.versePath}</p>
          <p key={`${ind} content`}>{currentVerse.content}</p>
        </div>
        <div><button onClick={()=> handleSaveUpdate(currentVerse._id)}><img src={star} alt="favorite button"></img></button></div>
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
