import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import apiUrl from "../../apiConfig";
import star from "../Nav/star.png";
import filledStar from './filled-star.png'
import UserContext from "../../context/context";
import { Link } from "react-router-dom";
import "./verse.css";
import jesu from "./jesu-svg.png";
const Verse = (props) => {
  const [isFave, setIsFave] = useState(false)
  const { user } = useContext(UserContext);
  const [verse, setVerse] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
      try {
        const res = await axios(`${apiUrl}/api/verses`);

        setVerse(
          res.data.verses.filter((i) => {
            return i.mood === props.mood;
          })
        );
      } catch (err) {
        console.error(err);
      }
    };
    makeApiCall();
  }, [setVerse, props.mood]);

  const userId = document.cookie.split("=")[1];

  const handleSaveUpdate = async (verseId) => {
    setIsFave(true)
    try {
      await axios({
        method: "PUT",
        url: `${apiUrl}/api/users/${userId}/addVerse/${verseId}`,
        data: { mood: props.mood },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const result = () => {
    const randomNum = Math.floor(Math.random() * 6);
    if (props.mood && verse[randomNum]) {
      return (
        <>
          <div className="vrs">
            <p id="verse-path">{verse[randomNum].versePath}</p>
            <p>{verse[randomNum].content}</p>
          </div>
          <div id="vrs-btn">
            <button onClick={() => handleSaveUpdate(verse[randomNum]._id)}>
              <img src={isFave ? filledStar : star} alt="favorite button" />
            </button>
          </div>
        </>
      );
    } else {
      return <p id="set-center">Set your current mood in the home page!</p>;
    }
  };

  return (
    <div className="verse-dash">
      {user.user ? (
        <div className="vrs-ctn">
          <img src={jesu} alt="jesus icon"></img>
          <br/>
          <br/>
          <div className="vrs-divider">
            <span></span>
            <div><p>Verse</p></div>
            <span></span>
          </div>
          {result()}{" "}
        </div>
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
