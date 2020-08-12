import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import {ReactMic} from 'react-mic'
// import deep-affects from 'deep-affects'
const goodthings = require('./goodthings.mp3')

function App() {

  const [blobURL, setBlobUrl]=useState("")
 
  // let inp = require('./goodthings.mp3')
  // const [playlist, setPlaylist] = useState([]);
  // const apiUrl = "http://localhost:3000/songs";
  // useEffect(() => {
  //   const makeApiCall = async () => {
  //     try {
  //       const res = await axios(apiUrl);
  //       setPlaylist(res.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   makeApiCall();
  // }, []);
  // axios({
  //   url: 'https://proxy.api.deepaffects.com/audio/generic/api/v2/sync/recognise_emotion?apikey=mDoOik9rXBIJxV6o3iQLueqQSBMvTPod',
  //   method: "POST",
  //   data: input,
  // });
  // var DeepAffects = require('deep-affects');

  // var defaultClient = DeepAffects.ApiClient.instance;
  
  // // Configure API key authorization: UserSecurity
  // var UserSecurity = defaultClient.authentications['UserSecurity'];
  // UserSecurity.apiKey = "mDoOik9rXBIJxV6o3iQLueqQSBMvTPod";
  
  // var api = new DeepAffects.EmotionApi();
  
  // var body = DeepAffects.Audio.fromFile("./goodthings.mp3"); // {Audio} Audio object that needs to be denoised.
  
  // let webhook = "https://webhook.site/a88f5936-9174-427e-b02c-40adce58de20"
  // // webhook = 'http://localhost:3000/api/users'
  // var callback = function(error, data, response) {
  //   if (error) {
  //     console.error(error);
  //   } else {
  //     console.log('API called successfully. Returned data: ' + data);
  
  //   }
  // };
  // api.asyncRecogniseEmotion(body, webhook, callback);
  // var request = require("request");

  // var options = { method: 'POST',
  //   url: 'https://proxy.api.deepaffects.com/audio/generic/api/v2/async/recognise_emotion',
  //   qs: 
  //    { apikey: 'mDoOik9rXBIJxV6o3iQLueqQSBMvTPod',
  //      webhook: 'https://webhook.site/a88f5936-9174-427e-b02c-40adce58de20' },
  //   headers: 
  //    { 'cache-control': 'no-cache',
  //      'Content-Type': 'application/json' },
  //   body: 
  //    { url: goodthings,
  //      encoding: 'MP3',
  //      languageCode: 'en-US',
  //      sampleRate: 8000,
  //      metrics: ['all'] },
  //   json: true };
  
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);
  
  //   console.log(body);

  //   console.log(response)
  // });


  function onData() {
    console.log('This function does not return an object, but is called at a time interval of 10ms');
  }

  function onStop(recordedBlob) {
    console.log('recordedBlob is: ', recordedBlob);
    setBlobUrl(recordedBlob.blobURL)
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
