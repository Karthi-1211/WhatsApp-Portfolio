
import React from 'react';
import Header from './Header';
import ChatBox from './ChatBox';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges?: string;
  solution?: string;
  features?: string[];
  timeline?: string;
}

interface ProjectDetailScreenProps {
  project: Project;
  onBackClick: () => void;
}

const ProjectDetailScreen: React.FC<ProjectDetailScreenProps> = ({ 
  project, 
  onBackClick 
}) => {
  // Initial messages to simulate a conversation about this project
  const initialMessages = [
    {
      id: 1,
      text: `👋 This is my project: ${project.title}`,
      time: "10:00 AM",
      isMe: false
    },
    {
      id: 2,
      text: project.description,
      time: "10:01 AM",
      isMe: false
    },
    {
      id: 3,
      text: `I built this using: ${project.technologies.join(', ')}`,
      time: "10:02 AM",
      isMe: false
    },
    {
      id: 4,
      text: project.timeline || "This was a challenging project that pushed my skills further.",
      time: "10:03 AM",
      isMe: false
    },
    {
      id: 5,
      text: "What challenges did you face during development?",
      time: "10:05 AM",
      isMe: true
    },
    {
      id: 6,
      text: project.challenges || "The biggest challenge was optimizing performance while maintaining a rich user experience. I implemented code splitting and lazy loading to improve load times.",
      time: "10:06 AM",
      isMe: false
    },
    {
      id: 7,
      text: "How did you solve those challenges?",
      time: "10:07 AM",
      isMe: true
    },
    {
      id: 8,
      text: project.solution || "I implemented code splitting and lazy loading to improve load times, and used advanced caching strategies to reduce API calls.",
      time: "10:08 AM",
      isMe: false
    }
  ];

  // Add messages about features if they exist
  if (project.features && project.features.length > 0) {
    initialMessages.push({
      id: 9,
      text: "What are the main features of this project?",
      time: "10:09 AM",
      isMe: true
    });
    
    initialMessages.push({
      id: 10,
      text: `The key features include: ${project.features.join(', ')}`,
      time: "10:10 AM",
      isMe: false
    });
  }

  // Add messages about links if they exist
  if (project.demoUrl || project.githubUrl) {
    initialMessages.push({
      id: 11,
      text: "Can I see the live demo or the code?",
      time: "10:11 AM",
      isMe: true
    });
    
    const links = [];
    if (project.demoUrl) links.push(`Live demo: ${project.demoUrl}`);
    if (project.githubUrl) links.push(`GitHub repository: ${project.githubUrl}`);
    
    initialMessages.push({
      id: 12,
      text: `Sure! Here are the links:\n${links.join('\n')}`,
      time: "10:12 AM",
      isMe: false
    });
  }

  return (
    <div className="flex flex-col h-full">
      <Header 
        title={project.title} 
        avatarSrc={project.image} 
        onBackClick={onBackClick} 
      />
      <div className="flex-1 overflow-y-auto bg-gray-50">
        <ChatBox initialMessages={initialMessages} />
      </div>
    </div>
  );
};

export default ProjectDetailScreen;