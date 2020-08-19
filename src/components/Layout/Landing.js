import React, { useContext} from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../../context/context";
import "./landing.css";
import Header from './Header'
const Landing = () => {
    if(!document.cookie){
         alert("You must enable cookies! This website uses cookies to give you a relevant experience. By enabling cookies you agree to allow cookies to be placed. To get more information about cookies and your personal data processing, please check out our Privacy Policy.");

    }
   
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const logout = () => {
    setUser({
      token: undefined,
      user: undefined,
      id: undefined,
    });
    localStorage.setItem("auth-token", "");
    document.cookie = "userId=";
    console.log("in logout", document.cookie);
  };

  return (
      <>
      <Header/>
       <p id="landing-tagline">Get bible verses based on your current mood!</p>
    <div className="landing-ctn">
        
      
     
      {user.user ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <>
    
          <button onClick={register}>Register</button>
          <br/>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
    </>
  );
};

export default Landing;
