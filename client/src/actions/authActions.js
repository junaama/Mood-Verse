import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'
import apiUrl from '../apiConfig.js'

import {
    GET_ERRORS,
    SET_CURRENT_USER,
    USER_LOADING
  } from "./types";

  //register user
export const registerUser = (userData, history)=> dispatch =>{
    axios
        .post(`${apiUrl}/api/users/register`, userData)
        .then(res=> history.push("/login"))
        .catch(err=>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            }))
}


  //login
export const loginUser = userData => dispatch => {
    axios
        .post(`${apiUrl}/api/users/login`, userData)
        .then(res => {
            //set token to localstorage
            const { token } = res.data
            localStorage.setItem("jwtToken", token)
            //set token to auth header
            setAuthToken(token)
            //decode token to get user data
            const decoded = jwt_decode(token)
            //set curr user
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
  

  //set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}
  //user loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}
  //logout user
export const logoutUser = () => dispatch => {
    //remove token from local storage
    localStorage.removeItem("jwtToken")
    //remove auth header for future requests
    setAuthToken(false)
    //set curr user to empty obj to set isAuth to false
    dispatch(setCurrentUser({}))
}