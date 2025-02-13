import React from "react";
import "./Project.css";
import project1 from "../assets/azmeraTrade.jpg";
import project2 from "../assets/netflixd.jpg";
import project3 from "../assets/apple.webp";
import project4 from "../assets/studynest.jpg";
import project5 from "../assets/fitclub.png";
import project6 from "../assets/forHotel.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      title: "Azmera Trade  /APP",
      github: "https://github.com/hailegithubaccount/second-hackton-demo-app.git",
      
    },
    {
      id: 2,
      image: project2,
      title: "Netflix Clone",
      github: "https://github.com/hailegithubaccount/netflix-by-react.git",
      live: "https://selamhailecom.netlify.app/",
    },
    {
      id: 3,
      image: project3,
      title: "Apple",
      github: "https://github.com/hailegithubaccount/Apple.git",
      live: "https://leomain.netlify.app/",
    },
    {
      id: 4,
      image: project4,
      title: "Study Nest  /APP",
      github: "https://github.com/user/project4",
     
    },
    {
      id: 5,
      image: project5,
      title: "Fitclub",
      github: "https://github.com/hailegithubaccount/fitClub-by-react.git",
      live: "https://michaelhailecom.netlify.app/",
    },
    {
      id: 6,
      image: project6,
      title: "Hotel Website",
      github: "https://github.com/hailegithubaccount/forhotel.git",
      live: "https://forhotelcom.netlify.app/",
    },
  ];

  return (
    <div>
      <div className="tsuf">My Projects</div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`Project ${project.id}`} />
            <h3 className="project-title">{project.title}</h3>
            <div className="overlay">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-preview">
                Live Preview
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
