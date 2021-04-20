import React from "react";
import { NavLink } from "react-router-dom";
import Pic from "../images/about.png";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <div className="wrapper about">
      <div className="lefty">
        <img src={Pic} alt="About" />
      </div>
      <div className="righty">
        <h1>
          Hi <span>There</span>
        </h1>
        <p>
          I am a 2nd year student from Dr. Akhilesh Das Gupta Institute of
          Technology and Management pursuing an undergraduate degree in
          INFORMATION TECHNOLOGY. I am a <strong>MERN stack developer</strong>.
          I live applying responsive design principles and watching my web pages
          shrink into mobile screens and still looking amazing. I'm moldable,but
          I still keep my creative flare intact.{" "}
          <strong>Worried about my skills?</strong> head on to the skills
          section, or just download my resume.
        </p>
        <NavLink exact to="/skills" className="btn btn-2">
          <strong>Skills</strong>
        </NavLink>
        <a href={Resume} download="resume.pdf" className="btn">
          <strong>Download Resume</strong>
        </a>
      </div>
    </div>
  );
};

export default About;
