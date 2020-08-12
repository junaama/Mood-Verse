import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ReactMic } from "react-mic";
const goodthings = require("./goodthings.mp3");
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition()
recognition.start()
function App() {
  const [mood, setMood]= useState("")

  const voiceCommands = () => {
    recognition.onstart = () => {
      console.log('Voice is actived');
    }
    }  
    recognition.onresult = (e) => {
      let current = e.resultIndex;

      let transcript = e.results[current][0].transcript;

      let mobileRepeatBug = (current === 1 && transcript === e.results[0][0].transcript)

      if(!mobileRepeatBug){
        if(transcript === 'happy' || transcript === ' happy'){
          setMood('happy')
        }
        if(transcript === 'angry' || transcript === ' angry'){
          setMood('angry')
        }
        if(transcript === 'sad' || transcript === ' happy'){
          setMood('sad')
        }
        if(transcript === 'frustrated' || transcript === ' happy'){
          setMood('frustrated')
        }
        if(transcript === 'empathy' || transcript === ' happy'){
          setMood('empathy')
        }
        if(transcript === 'politeness' || transcript === ' happy'){
          setMood('politeness')
        }
        setMood(transcript)
      }
      setTimeout(()=> {
        recognition.start()
      }, 1000)
      recognition.onspeechend = () => {
        recognition.stop()
        console.log('voice stopped')
      }
    }
    
  useEffect(()=>{
    voiceCommands()
  })
  const [verse, setVerse] = useState([])
  const [result, setResult] = useState({})
  useEffect(()=> {
    const makeApiCall = async () => {
      try {
        const res = await axios("http://localhost:3000/verses")
        console.log(res.data[0][0])
        setVerse(res.data)
      }catch(err){
        console.error(err)
      }
    }
    makeApiCall()
  },[])
  console.log(verse)
  let currentW = "sad"
  let randomNum

  const output = verse.map((item)=> {
    
    console.log('item -', item[mood])
    if(mood){
     randomNum= Math.floor(Math.random() * item[mood].length)
     return (
       <>
        <p>{item[mood][randomNum].versePath}</p>
        <p>{item[mood][randomNum].content}</p>
       </>
     )
     
    }
    // setResult()
    console.log(randomNum)
  })
  console.log('result -', output)
  // const [record, setRecord] = useState(false);
  // const [blobURL, setBlobUrl] = useState("");
  // const reader = new FileReader()
  // function onData() {
  //   console.log(
  //     "This function does not return an object, but is called at a time interval of 10ms"
  //   );
  // }
 
  // function onStop(recordedBlob) {
  //   console.log("recordedBlob is: ", recordedBlob);
  //   setBlobUrl(recordedBlob.blobURL);
  //   sendAudioFile(recordedBlob)
  // }

  // function startRecording() {
  //   setRecord(true);
  // }
  // function stopRecording() {
  //   setRecord(false);
  // }

  // async function sendAudioFile(file) {
  //   const formData = new FormData();
  //   formData.append('audio-file', file);
  //   // const response = await fetch('http://localhost:3000/', {
  //   //   method: 'POST',
  //   //   data: formData
  //   // })
  //   console.log(file)
  // }

  return (
    <div className="App">
      Mood options are
      <ul>
        <li>Sad</li>
        <li>Angry</li>
        <li>Frustrated</li>
        <li>Politeness</li>
        <li>Happy</li>
        <li>Empathy</li>
        <li>Engagement</li>
      </ul>
      <p>Mood is {mood}</p>
      <p>Your verse is: {output}</p>
      {/* <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        mimeType="audio/mp3"
        backgroundColor="gray"
      />
      <button onClick={startRecording} type="button">
        Start
      </button>
      <button onClick={stopRecording} type="button">
        Stop
      </button>
      <audio src={blobURL} controls="controls" /> */}
    </div>
  );
}

export default App;
