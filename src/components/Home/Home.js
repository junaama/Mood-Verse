import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import UserContext from "../../context/context";
import Header from "../Layout/Header";
import "./home.css";
import TextLoop from "react-text-loop";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

const Home = (props) => {
  const { user } = useContext(UserContext);
  const [isRecording, setIsRecording] = useState(false);
  const history = useHistory();

  const voiceCommands = () => {
    recognition.start()
    recognition.onstart = () => {
      console.log("Voice is active");
      setIsRecording(true);
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
    }, 500);
    recognition.onspeechend = () => {
      recognition.stop();
      setIsRecording(false)
      console.log("voice stopped");
      history.push("/verse");
    };
  };

  // useEffect(() => {
  //   voiceCommands();
  // });

  return (
    <div className="home-ctn">
      {user.user ? (
        <>
          <Header />
          <div className="mood-content-ctn">
            Feeling{" "}
            <TextLoop
              children={[
                "Happy",
                "Angry",
                "Sad",
                "Frustrated",
                "Empathy",
                "Worried",
                "Vengeful",
                "Thankful",
                "Excited",
                "Peaceful",
                "Jealous",
                "Heartbroken",
                "Apathetic",
                "Joyful",
                "Annoyed",
                "Confused",
                "Uncomfortable",
              ]}
              springConfig={{ stiffness: 180, damping: 8 }}
              interval={1500}
            />{" "}
            Today?
          </div>
          <div className="btn-ctn-ctn">
            <div className={isRecording ? "btn-ctn is-recording is-blinking" : "btn-ctn"}>
            {" "}
            <button
              id="record-btn"
              onClick={() => {
                voiceCommands()
              }}
            >record
            </button>
          </div>
          </div>

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
