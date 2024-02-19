import React from 'react';
import './projectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="recent-project-card">
      <img src={project.imageUrl} alt={project.name} className="project-image" />
      <div className="recent-project-details">
        <h3 className="recent-project-name "style={{fontSize:"20px"}}>{project.name}</h3>
        <p className="recent-project-tech-stack">Tech Stack: {project.techStack}</p>
        <a href={project.link} className="recent-project-link" target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default ProjectCard;
