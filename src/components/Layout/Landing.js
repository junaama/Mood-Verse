import React, {useContext, useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../context/context'
import axios from 'axios'
import apiUrl from '../../apiConfig'
const apiKey = process.env.apiKey
const Landing = () => {
    const [plan, setPlan] = useState([])
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()
    const register = () => history.push('/register')
    const login = () => history.push('/login')
    const logout = () => {
        setUser({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token", "")
    }
    /*
    const randomNum = Math.floor(Math.random()* 814)
    useEffect(()=> {
        // const makeApiCall = async () => {
        //     try {
        //        const res = await axios({
        //            method: "get",
        //            url: "https://api.esv.org/v3/passage/text/?q=Psalm+11:35",
        //            headers: {
        //                Authorization: 'Token ${apiKey}'
        //            },
        //            params: {
        //                'include-short-copyright': false
        //            }
        //        })
        //         console.log(res.data)
        //     }catch(err){
        //         console.error(err)
        //     }
        // }
        const makeApiCall = async ()=> {
            try {
                const res = await axios(`${apiUrl}/api/books`)
                console.log(res.data)
                setPlan(res.data[randomNum])
            } catch (error) {
                console.error();
            }
        }
        makeApiCall()
    },[])
    */
    return (
        <div>
            <h4>Get bible verses based on your current mood!</h4>
            {user.user ? (<button onClick={logout}>Log Out</button>) : (
                <>
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
                </>
            )}
        </div>
    )
}

export default Landing