import React, { useState } from "react";
import { Route, Switch } from "react-router";
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import store from './store'
import Home from "./components/Home/Home";
import Verse from "./components/Verse/Verse";
import Nav from "./components/Nav/Nav";
import Landing from './components/Layout/Landing'
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import "./App.css";

function App() {
  const [mood, setMood] = useState("");

  return (
    <Provider store={store}>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/login" component={Login}/>
        <Route
          exact
          path="/home"
          render={(props) => <Home {...props} setMood={setMood} />}
        />
        <Route
          path="/verse"
          render={(props) => <Verse {...props} mood={mood} />}
        />
      </Switch>
      {/* <Landing/> */}
      <Nav />
    </div>
    </Provider>
  );
}

export default App;
