import React from "react";
import insta from "../assets/icons/insta.svg";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";

const Footer = () => {
  return (
    <div className="links">
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <img src={insta} alt="Instagram" className="link" />
      </a>

      <a href="https://github.com/YashGupta29" target="_blank" rel="noreferrer">
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
  );
};

export default Footer;
