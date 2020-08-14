import React, {useState, useContext} from 'react'
import { useHistory} from 'react-router-dom'
import UserContext from '../../context/context'
import axios from 'axios'
import Errors from '../errors/errors'
import apiUrl from '../../apiConfig'
const Register = (props) => {
    const [input, setInput]= useState({
        username: "", email: "", password: "", password2: ""
    })
    const [errors, setErrors]= useState()
    const history = useHistory()
    const {setUser}=useContext(UserContext)
    const handleChange = (e)=> {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e)=> {
        e.preventDefault()
        
        try{
            const email = input.email
            const password = input.password
            await axios.post(`${apiUrl}/api/users/register`, input)
            const loginRes = await axios.post(`${apiUrl}/api/users/login`, {
                email,
                password,
            })
            setUser({
                token: loginRes.data.token,
                user: loginRes.data.user
            })
            localStorage.setItem("auth-token", loginRes.data.token)
            history.push('/')
        }catch(err){
            err.response.data.msg && setErrors(err.response.data.msg)
        }
    }



        
    return (
        <div>
             {errors && (
        <Errors message={errors} clearError={() => setErrors(undefined)} />
      )}
            <form onSubmit={handleSubmit}>

            <label>Username</label>
            <input  onChange={handleChange} type='text' name="username" id="username" />

            <label>Email</label>
            <input  onChange={handleChange} type='text' name="email" id="email" />

            <label>Password</label>
            <input  onChange={handleChange}  type='text' name="password" id="password" />

            <label>Confirm Password</label>
            <input  onChange={handleChange}  type='text' name="password2" id="password2" />

            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
export default Register