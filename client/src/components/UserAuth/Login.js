import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
const Login = (props) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.loginUser(input);
  };
  if (props.auth.isAuthenticated) {
    props.history.push("/home");
  }
  if (props.errors) {
    setErrors(props.errors);
  }
  // useEffect(()=> {

  // },[props.auth.isAuthenticated, props.errors, props.history])
  // props.loginUser(input)
  return (
    <div>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          errors={errors.email}
          onChange={handleChange}
          type="text"
          name="email"
          id="email"
          className={classnames("", {
            invalid: errors.email || errors.emailnotfound,
          })}
        />

        <label htmlFor="password">Password</label>
        <input
          errors={errors.password}
          onChange={handleChange}
          type="text"
          name="password"
          id="password"
          className={classnames("", {
            invalid: errors.password || errors.passwordincorrect,
          })}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);
// export default Login
