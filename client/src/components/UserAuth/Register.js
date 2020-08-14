import React, {useState, useEffect} from 'react'
import {Link, withRouter} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {registerUser} from '../../actions/authActions'
import classnames from 'classnames';


const Register = (props) => {
    const [input, setInput]= useState({
        username: "", email: "", password: "", password2: ""
    })
    const [errors, setErrors]= useState({})
    
    const handleChange = (e)=> {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=> {
        e.preventDefault()
        props.registerUser(input, props.history)
     if(props.errors){
            setErrors(props.errors)
        }
    }

 


        
    return (
        <div>
            <form noValidate onSubmit={handleSubmit}>

            <label>Username</label>
            <input errors={errors.username} onChange={handleChange} type='text' name="username" id="username" className={classnames("", {
                    invalid: errors.username
                  })}/>

            <label>Email</label>
            <input errors={errors.email} onChange={handleChange} type='text' name="email" id="email" className={classnames("", {
                    invalid: errors.email
                  })}/>

            <label>Password</label>
            <input errors={errors.password} onChange={handleChange}  type='text' name="password" id="password" className={classnames("", {
                    invalid: errors.password
                  })}/>

            <label>Confirm Password</label>
            <input errors={errors.password2} onChange={handleChange}  type='text' name="password2" id="password2" className={classnames("", {
                    invalid: errors.password2
                  })}/>

            <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
const mapStateToProps = state => ({
    auth: state.auth, 
    errors: state.errors
})
export default connect(
    mapStateToProps, {registerUser}
)(withRouter(Register))