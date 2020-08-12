import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {ReactMic} from 'react-mic'
// import deep-affects from 'deep-affects'
const goodthings = require('./goodthings.mp3')

function App() {

  const [blobURL, setBlobUrl]=useState("")
 
  function onData() {
    console.log('This function does not return an object, but is called at a time interval of 10ms');
  }

  const [savedFile, setSavedFile]= useState("")
  function onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    setBlobUrl(recordedBlob.blobURL)
    // const objectURL = srcObject(recordedBlob.blobURL)
    // console.log(objectURL)
  }
  const [record, setRecord]=useState(false)

  function startRecording()  {
    setRecord(true)
  }
  function stopRecording()  {
    setRecord(false)
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
          backgroundColor="gray" />
        <button onClick={startRecording} type="button">Start</button>
        <button onClick={stopRecording} type="button">Stop</button>
        <audio src={blobURL} controls="controls"/>
    </div>
  );
}

export default App;
