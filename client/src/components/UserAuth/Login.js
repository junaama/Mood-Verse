import React, { useState, useContext } from "react";
import {  useHistory} from "react-router-dom";
import axios from 'axios'
import Errors from '../errors/errors'
import UserContext from '../../context/context'
import apiUrl from '../../apiConfig.js'
const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState();
  const history = useHistory()
  const {setUser} = useContext(UserContext)

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = input.email
    const password = input.password
    try{
      const loginRes = await axios.post(`${apiUrl}/api/users/login`, {
        email,
        password
      })
      setUser({
        token: loginRes.data.token,
        user: loginRes.data.user
      })
      localStorage.setItem("auth-token", loginRes.data.token)
      history.push('/')
    }catch(err){
      err.response.data.msg && setErrors(err.response.data.msp)
    }

  };
 
  


  return (
    <div>
       {errors && (
        <Errors message={errors} clearError={() => setErrors(undefined)} />
      )}
      <form  onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
        
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          
        />

        <label htmlFor="password">Password</label>
        <input
         
          onChange={handleChange}
          type="text"
          name="password"
          id="password"
          
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login
