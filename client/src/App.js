import React, { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";

import Home from "./components/Home/Home";
import Verse from "./components/Verse/Verse";
import Nav from "./components/Nav/Nav";

function App() {
  const [mood, setMood] = useState("");

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} setMood={setMood} />}
        />
        <Route
          path="/verse"
          render={(props) => <Verse {...props} mood={mood} />}
        />
      </Switch>

      <Nav />
    </div>
  );
}

export default App;
