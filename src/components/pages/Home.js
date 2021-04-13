import React from "react";
import { NavLink } from "react-router-dom";
import Pic from "../images/pic.png";
import insta from "../assets/icons/insta.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Home = () => {
  return (
    <div className="wrapper">
      <div className="left">
        <h1>
          Hi
          <br />
          I'am <span>Yash Gupta</span>
          <br />
          Web Developer
        </h1>
        {/* <a href={Resume} download="resume.pdf" className="btn">
          Download Resume
        </a> */}
        <NavLink exact to="/contact" className="btn">
          Hire Me
        </NavLink>
      </div>
      <div className="right">
        <img src={Pic} alt="profile" />
      </div>
      <div className="links">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src={insta} alt="Instagram" className="link" />
        </a>

        <a
          href="https://github.com/YashGupta29"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="Github" className="link" />
        </a>

        <a
          href="https://www.linkedin.com/in/yash-g-634b3411b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" className="link" />
        </a>
      </div>
    </div>
  );
};

export default Home;
