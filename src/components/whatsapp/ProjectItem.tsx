
import React from 'react';
import ContactItem from './ContactItem';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  technologies?: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges?: string;
  solution?: string;
  features?: string[];
  timeline?: string;
}

interface ProjectItemProps {
  project: Project;
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, onClick }) => {
  return (
    <ContactItem
      name={project.title}
      message={project.description}
      time={project.date}
      imgSrc={project.image}
      onClick={onClick}
    />
  );
};

export default ProjectItem;
