import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import UserContext from "./context/context";
// import Home from "./components/Home/Home";
import Verse from "./components/Verse/Verse";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import "./App.css";
import apiUrl from "./apiConfig.js";
import axios from "axios";
import Saved from "./components/Saved/Saved";
import About from "./components/Settings/About";
import Settings from "./components/Settings/Settings";
import Terms from "./components/Settings/Terms";
import Privacy from "./components/Settings/Privacy";
import Feedback from "./components/Settings/Feedback";
function App() {
  const [mood, setMood] = useState("");
  const [user, setUser] = useState({
    token: undefined,
    user: undefined,
  });
  const [savedVerses, setSavedVerses] = useState({});
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        `${apiUrl}/api/users/tokenIsValid`,
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get(`${apiUrl}/api/users`, {
          headers: { "x-auth-token": token },
        });

        setUser({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);
  setMood("happy")
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route  path="/register" component={Register} />
          <Route  path="/login" component={Login} />
          {/* <Route
            
            path="/home"
            render={(props) => <Home {...props} setMood={setMood} />}
          /> */}

          <Route
            
            path="/verse/"
            render={(props) => (
              <Verse {...props} mood={mood} setSavedVerses={setSavedVerses} />
            )}
          />
          <Route
            
            path="/saved"
            render={(props) => <Saved {...props} savedVerses={savedVerses} />}
          />
          <Route  path="/settings" component={Settings} />
          <Route  path="/tc" component={Terms} />
          <Route  path="/pp" component={Privacy} />
          <Route  path="/feedback" component={Feedback} />
          <Route  path="/about" component={About} />
        </Switch>
        <Nav />
      </div>
    </UserContext.Provider>
  );
}

export default App;
