import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { ReactMic } from "react-mic";
const goodthings = require("./goodthings.mp3");

function App() {
  const [record, setRecord] = useState(false);
  const [blobURL, setBlobUrl] = useState("");
  const reader = new FileReader()
  function onData() {
    console.log(
      "This function does not return an object, but is called at a time interval of 10ms"
    );
  }
 
  function onStop(recordedBlob) {
    console.log("recordedBlob is: ", recordedBlob);
    setBlobUrl(recordedBlob.blobURL);
    sendAudioFile(recordedBlob)
  }

  function startRecording() {
    setRecord(true);
  }
  function stopRecording() {
    setRecord(false);
  }

  async function sendAudioFile(file) {
    const formData = new FormData();
    formData.append('audio-file', file);
    // const response = await fetch('http://localhost:3000/', {
    //   method: 'POST',
    //   data: formData
    // })
    console.log(file)
  }

  return (
    <div className="App">
      hi
      <ReactMic
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
      <audio src={blobURL} controls="controls" />
    </div>
  );
}

export default App;
