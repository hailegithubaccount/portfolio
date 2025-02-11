import React from "react";
import "./Project.css";
import project1 from "../assets/azmeraTrade.jpg";
import project2 from "../assets/netflix.jpg";
import project3 from "../assets/smartmenu.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      github: "https://github.com/user/project1",
    },
    {
      id: 2,
      image: project2,
      github: "https://github.com/user/project2",
    },
    {
      id: 3,
      image: project3,
      github: "https://github.com/user/project3",
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img src={project.image} alt={`Project ${project.id}`} />
          <div className="overlay">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
