import React from "react";
import "./set.css";
const About = () => {
  return (
    <div className="about-ctn">
      <div className="mission-ctn">
        <p id="msn-stm">My Mission</p>
        <p>
          Mood Verse was made with the intention to expose inspiring bible
          verses to everybody! Reading a bible verse catered to your feelings in
          the moment can allow you to remember the verse the next time you're
          feeling that way!
        </p>
      </div>
      <div className="about-me-ctn">
        <p>
          Created by <a href="https://github.com/junaama">Naama Paulemont</a> as
          apart of General Assembly.
        </p>
        <p>
          Mood Verse was built using React.js, MongoDB, Express.js, and Node.js
        </p>
      </div>
    </div>
  );
};
export default About;
