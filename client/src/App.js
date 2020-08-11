import React from 'react';
import './App.css';

function App() {
  var DeepAffects = require('deep-affects');

var defaultClient = DeepAffects.ApiClient.instance;

// Configure API key authorization: UserSecurity
var UserSecurity = defaultClient.authentications['UserSecurity'];
UserSecurity.apiKey = "mDoOik9rXBIJxV6o3iQLueqQSBMvTPod";

var api = new DeepAffects.DenoiseApi();

var body = DeepAffects.Audio.fromFile("/path/to/file"); // {Audio} Audio object that needs to be denoised.

webhook = "http://your/webhook/"
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.syncDenoiseAudio(body, callback);
api.asyncDenoiseAudio(body, webhook, callback);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
