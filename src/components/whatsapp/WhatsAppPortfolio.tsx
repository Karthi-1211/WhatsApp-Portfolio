
import React, { useState } from 'react';
import TabMenu from './TabMenu';
import ProjectItem from './ProjectItem';
import ProfileScreen from './ProfileScreen';
import SkillsScreen from './SkillsScreen';
import EducationScreen from './EducationScreen';
import AchievementsScreen from './AchievementsScreen';
import ProjectDetailScreen from './ProjectDetailScreen';
import ContactScreen from './ContactScreen';
import { Search, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const WhatsAppPortfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chats' | 'status' | 'calls' | 'education' | 'achievements'>('chats');
  const [activeProfile, setActiveProfile] = useState<string | null>(null);
  const [activeProject, setActiveProject] = useState<any | null>(null);
  
  const projects = [
    {
      id: 'project1',
      title: 'AI Mock Interview Application',
      description: 'A web application that simulates technical interviews using AI',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=300',
      date: 'Today',
      technologies: ['React', 'Node.js', 'Vite', 'SupaBase', ],
      demoUrl: 'https://ai-mock-interview-drab.vercel.app/',
      githubUrl: 'https://github.com/Karthi-1211/AI-Mock-Interview',
      challenges: 'Integrating AI for real-time feedback and ensuring the application was user-friendly and responsive.',
      solution: 'I used a combination of React for the frontend and Node.js for the backend, with SupaBase for database management.',
      features: ['AI-driven interview questions', 'Real-time feedback', 'User authentication', 'Progress tracking', 'Customizable interview settings'],
      timeline: 'This project took 1 months to complete, from initial design to deployment'
    },
    {
      id: 'project2',
      title: 'Personal Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=300',
      date: 'Last week',
      technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
      demoUrl: 'https://portfolio-self-six-39.vercel.app/',
      githubUrl: 'https://github.com/Karthi-1211/Portfolio',
      challenges: 'Creating a responsive design that worked well on both desktop and mobile devices while ensuring fast load times.',
      solution: 'I utilized Next.js for server-side rendering and optimized images with Next.js Image component, along with Tailwind CSS for styling.',
      features: ['Responsive design', 'Smooth animations', 'Project showcase', 'Contact form', 'Blog section'],
      timeline: 'This project was built in 2 weeks as a personal challenge.'
    },
    {
      id: 'project3',
      title: 'Web Based AI Agent ',
      description: 'Built a web-based AI agent that can answer questions and provide information',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=300&h=300',
      date: '5 Monsths ago',
      technologies: ['React', 'Tailwind CSS', 'FastAPI', 'Python'],
      demoUrl: 'https://example.com/social',
      githubUrl: 'https://github.com/Karthi-1211/My-AI-Agent',
      challenges: 'Handling large amounts of data and ensuring the AI could provide accurate and relevant responses quickly.',
      solution: 'I implemented a caching mechanism to store frequently asked questions and their answers, reducing response time significantly.',
      features: ['Natural language processing', 'User-friendly interface', 'Real-time updates', 'Data visualization', 'Customizable settings'],
      timeline: 'This project took 1 Week to complete, from initial concept to deployment.'
    },
    {
      id: 'project4',
      title: ': A Smart IoT Enabled System for Leaf Disease Detection with Severity and Pesticide Recommendation',
      description: 'An IoT-based system for detecting leaf diseases and recommending pesticides',
      image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=300&h=300',
      date: 'Last month',
      technologies: ['Python', 'Flask', 'TensorFlow', 'Raspberry Pi'],
      demoUrl: 'https://example.com/iot',
      githubUrl: 'https://github.com/RamKumar726/finalYearProject',
      challenges: 'Integrating hardware with software and ensuring accurate disease detection using machine learning algorithms.',
      solution: 'I used TensorFlow for training the model and Flask for creating a web interface to interact with the Raspberry Pi.',
      features: ['Real-time disease detection', 'Severity analysis', 'Pesticide recommendations', 'User-friendly interface', 'Data logging'],
      timeline: 'This project was completed in 3 months as part of my final year project.'
    }

  ];

  const renderContent = () => {
    if (activeProject) {
      return <ProjectDetailScreen project={activeProject} onBackClick={() => setActiveProject(null)} />;
    }
    
    if (activeProfile) {
      return <ProfileScreen onBackClick={() => setActiveProfile(null)} />;
    }
    
    switch (activeTab) {
      case 'chats':
        return (
          <div className="h-full flex flex-col">
            <div className="bg-whatsapp-dark text-white p-4">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold">Projects</h2>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-whatsapp p-2 h-auto flex items-center gap-1"
                  onClick={() => setActiveProfile('profile')}
                >
                  <User className="h-5 w-5" /> Profile
                </Button>
              </div>
              <div className="flex items-center bg-whatsapp p-2 rounded-lg">
                <Search className="h-5 w-5 mr-2" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-transparent text-white placeholder-white/70 outline-none w-full text-sm"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto bg-white">
              {projects.map((project) => (
                <ProjectItem
                  key={project.id}
                  project={project}
                  onClick={() => setActiveProject(project)}
                />
              ))}
            </div>
          </div>
        );
      case 'status':
        return <SkillsScreen />;
      case 'education':
        return <EducationScreen />;
      case 'achievements':
        return <AchievementsScreen />;
      case 'calls':
        return <ContactScreen />;
      default:
        return null;
    }
  };
  
  return (
    <div className="flex flex-col h-full border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white max-w-md mx-auto">
      <div className="h-full flex flex-col">
        <TabMenu activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 flex flex-col overflow-hidden">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPortfolio;