import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../../context/context";
import Header from '../Layout/Header'
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Home = (props) => {
  const { user } = useContext(UserContext);
  const history = useHistory();
  const voiceCommands = () => {
    recognition.onstart = () => {
      console.log("Voice is actived");
    };
  };
  recognition.onresult = (e) => {
    let current = e.resultIndex;

    let transcript = e.results[current][0].transcript;

    let mobileRepeatBug =
      current === 1 && transcript === e.results[0][0].transcript;

    if (!mobileRepeatBug) {
      if (transcript === "happy" || transcript === " happy") {
        props.setMood("happy");
      }
      if (transcript === "angry" || transcript === " angry") {
        props.setMood("angry");
      }
      if (transcript === "sad" || transcript === " sad") {
        props.setMood("sad");
      }
      if (transcript === "frustrated" || transcript === " frustrated") {
        props.setMood("frustrated");
      }
      if (transcript === "empathy" || transcript === " empathy") {
        props.setMood("empathy");
      }
      if (transcript === "politeness" || transcript === " politeness") {
        props.setMood("politeness");
      }
      if (transcript === "vengeful" || transcript === " vengeful") {
        props.setMood("vengeful");
      }
      if (transcript === "thankful" || transcript === " thankful") {
        props.setMood("thankful");
      }
      if (transcript === "excited" || transcript === " excited") {
        props.setMood("excited");
      }
      if (transcript === "peaceful" || transcript === " peaceful") {
        props.setMood("peaceful");
      }
      if (transcript === "jealous" || transcript === " jealous") {
        props.setMood("jealous");
      }
      if (transcript === "heartbroken" || transcript === " heartbroken") {
        props.setMood("heartbroken");
      }
      if (transcript === "apathetic" || transcript === " apathetic") {
        props.setMood("apathetic");
      }
      if (transcript === "joyful" || transcript === " joyful") {
        props.setMood("joyful");
      }
      if (transcript === "annoyed" || transcript === " annoyed") {
        props.setMood("annoyed");
      }
      if (transcript === "confused" || transcript === " confused") {
        props.setMood("confused");
      }
      if (transcript === "uncomfortable" || transcript === " uncomfortable") {
        props.setMood("uncomfortable");
      }
      if (transcript === "worried" || transcript === " worried") {
        props.setMood("worried");
      }
      props.setMood(transcript);
    }
    setTimeout(() => {
      recognition.start();
    }, 1000);
    recognition.onspeechend = () => {
      recognition.stop();
      console.log("voice stopped");
      history.push("/verse");
    };
  };

  useEffect(() => {
    voiceCommands();
  });

  return (
    <div>
      {user.user ? (
        <>
        <Header/>
        <p>Mood options are</p>
      <ul>
        Happy Angry Sad Frustrated Empathy Politeness Worried Vengeful Thankful
        Excited Peaceful Jealous Heartbroken Apathetic Joyful Annoyed Confused
        Uncomfortable
      </ul>
      <button
        onClick={() => {
          recognition.start();
        }}
      >
        Record
      </button>
      </>
      ) : (
      <>
        <h2>You are not logged in</h2>
        <Link to="/login">Log in</Link>
      </>
      )}
    </div>
  );
};

export default Home;
