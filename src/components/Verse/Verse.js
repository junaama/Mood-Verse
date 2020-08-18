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
        // setVerse(res.data.verses);
        // console.log(res.data.verses)
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
        data: { ["mood"]: props.mood },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // console.log(props.mood)
  // console.log(verse)
  // verse.filter((item)=>{
   
  //   return item.mood === props.mood
  // })
  // console.log("46", verse)
const result = () => {
  // verse.filter((item)=>{
   
  //   return item.mood === props.mood
  // })
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
  const output = verse.map((item, i) => {
    let randomNum = Math.floor(Math.random() * 6);
    // console.log(item)
    if (props.mood) {
      // if (item[props.mood] === undefined) {
      //   return <>No verse available for that mood.</>;
      // }
      // let currentVerse = item[props.mood][randomNum];

      return (
        <>
          {/* <div key={`${ind} div`}>
            <p key={`${ind} path`}>{currentVerse.versePath}</p>
            <p key={`${ind} content`}>{currentVerse.content}</p>
          </div>
          <div>
            <button onClick={() => handleSaveUpdate(currentVerse._id)}>
              <img src={star} alt="favorite button"></img>
            </button>
          </div> */}
        </>
      );
    }
    return <p key={`${i} p`}>Set your current mood in the home page!</p>;
  });

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
