import React, { useState } from "react";
import axios from 'axios'
const Feedback = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const resetForm = () => {
      setInput({
        name: "",
        email: "",
        message: "",
      })
  }
  const handleChange = (e) => {
    // console.log(e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input)

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/api/send", input
      ).then((res)=>{
            alert("Message Sent.")
            resetForm()
    }).catch(()=>{
        console.log("Message not sent")
    })
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit} method="POST">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            onChange={handleChange}
            name="message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
export default Feedback;
