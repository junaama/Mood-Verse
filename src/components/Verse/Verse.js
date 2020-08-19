import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import star from "../Nav/star.png";
import UserContext from "../../context/context";
import { Link } from "react-router-dom";
import "./verse.css";

const Verse = (props) => {
  const { user } = useContext(UserContext);
  const [verse, setVerse] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/api/verses`);
  
        setVerse(res.data.verses.filter((i)=>{return i.mood === props.mood}))
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, [setVerse]);

  const userId = document.cookie.split("=")[1];

  const handleSaveUpdate = async (verseId) => {
    try {
      await axios({
        method: "PUT",
        url: `${apiUrl}/api/users/${userId}/addVerse/${verseId}`,
        data: { "mood": props.mood },
      });
    } catch (error) {
      console.error(error);
    }
  };

  
const result = () => {

  console.log("53", verse)
  const randomNum = Math.floor(Math.random() * 6);
  console.log(verse[randomNum])
  if(props.mood && verse[randomNum]){
    return (
      <>
      <div>
        <p>{verse[randomNum].versePath}</p>
    <p>{verse[randomNum].content}</p>
      </div>
      <div>
        <button onClick={()=> handleSaveUpdate(verse[randomNum]._id)}><img src={star} alt="favorite button"/></button>
      </div>
      </>
    )
  }else {
    return <p>Set your current mood in the home page!</p>;
  }
  
}


  return (
    <div className="verse-dash">
      {user.user ? (
        <>{result()} </>
      ) : (
        <>
          {" "}
          <h2>You are not logged in</h2>
          <Link to="/login">Log in</Link>
        </>
      )}
    </div>
  );
};
export default Verse;
