import React from "react";
import { Projects_data } from "../data/projects_data";
import github from "../assets/icons/github.svg";

const Projects = () => {
  const project_card = Projects_data.map(
    ({ title, image, github_url, diployed_url }) => {
      return (
        <div className="project-card">
          <a href={diployed_url}>
            <img src={image} alt={title} className="project-img" />
          </a>
          <div className="project-title">
            <a href={github_url} target="_blank" rel="noreferrer">
              <img src={github} alt="Github Link" className="project-icon" />
            </a>
            <h4>{title}</h4>
          </div>
        </div>
      );
    }
  );
  return <div className="projects">{project_card}</div>;
};

export default Projects;
