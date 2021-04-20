import React from "react";
import "./Skills.css";
import SkillBar from "./SkillBar";

const Skills = () => {
  return (
    <div className="skills-body">
      <div className="skill-contain">
        <div className="skill">
          <h1>Html</h1>
          <SkillBar done="90" />
        </div>
        <div className="skill">
          <h1>Bootstrap</h1>
          <SkillBar done="75" />
        </div>
        <div className="skill">
          <h1>ReactJs</h1>
          <SkillBar done="60" />
        </div>
        <div className="skill">
          <h1>NodeJs</h1>
          <SkillBar done="80" />
        </div>
        <div className="skill">
          <h1>ExpressJs</h1>
          <SkillBar done="80" />
        </div>
        <div className="skill">
          <h1>MongoDB</h1>
          <SkillBar done="90" />
        </div>
        <div className="skill">
          <h1>MySQL</h1>
          <SkillBar done="90" />
        </div>
        <div className="skill">
          <h1>Adobe Photoshop</h1>
          <SkillBar done="65" />
        </div>
        <div className="skill">
          <h1>Adobe XD</h1>
          <SkillBar done="65" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
