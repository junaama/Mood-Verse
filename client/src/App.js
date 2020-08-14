import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router";
import UserContext from './context/context'
import Home from "./components/Home/Home";
import Verse from "./components/Verse/Verse";
import Nav from "./components/Nav/Nav";
import Landing from './components/Layout/Landing'
import Register from "./components/UserAuth/Register";
import Login from "./components/UserAuth/Login";
import "./App.css";
import apiUrl from './apiConfig.js'
import axios from 'axios'
function App() {
  const [mood, setMood] = useState("");
  const [user, setUser] = useState({
    token: undefined,
    user: undefined
  })
  useEffect(()=> {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token")
      if(token === null){
        localStorage.setItem("auth-token", "")
        token = ""
      }
      const tokenRes = await axios.post(
        `${apiUrl}/api/users/tokenIsValid`,
        null,
        {headers: { "x-auth-token": token}}
      )
      if(tokenRes.data){
        const userRes = await axios.get(`${apiUrl}/api/users`, {
          headers: {"x-auth-token": token}
        })
        setUser({
          token,
          user: userRes.data
        })
      }
    }
    checkLoggedIn()
  },[])
  return (
    <UserContext.Provider value={{user, setUser}}>
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
          exact path="/verse"
          render={(props) => <Verse {...props} mood={mood} />}
        />
      </Switch>
      {/* <Landing/> */}
      <Nav />
    </div>
    </UserContext.Provider>
  );
}

export default App;
