import React from "react";
import { NavLink } from "react-router-dom";
import Pic from "../images/pic.png";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="lefty">
        <div className="top">
          <h1>
            Hi
            <br />
            I'am <span>Yash Gupta</span>
            <br />
            Web Developer
          </h1>
          <NavLink exact to="/contact" className="btn">
            Hire Me
          </NavLink>
        </div>
      </div>
      <div className="righty">
        <img src={Pic} alt="profile" />
      </div>
    </div>
  );
};

export default Home;
