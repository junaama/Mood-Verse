import React, { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from '../../apiConfig'
const Verse = (props) => {
  const [verse, setVerse] = useState([]);
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

  const output = verse.map((item, ind) => {
    if (props.mood) {
      return (
        <div key={`${ind} div`}>
          <p key={`${ind} path`}>{item[props.mood][randomNum].versePath}</p>
          <p key={`${ind} content`} >{item[props.mood][randomNum].content}</p>
        </div>
      );
    }
    return (
        <p key={`${ind} p`}>No applicable mood.</p>
    )
  });
  return <>{output}</>;
};
export default Verse;
