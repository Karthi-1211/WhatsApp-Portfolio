
import React, { useState } from 'react';
import { Calendar, BookOpen } from 'lucide-react';

interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description: string;
}

const EducationScreen: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<string | null>(null);
  
  const educationList: Education[] = [
    {
      id: 'edu1',
      degree: 'Bachelor of Technology in Computer Science & Engineering',
      institution: 'Anil Neerukonda Institute of Technology and Sciences(ANITS)',
      duration: '2021 - 2025',
      description: 'Specialized in Artificial Intelligence and Internet of Things(IoT). Completed projects on Artificial Intelligence and IoT".'
    },
    {
      id: 'edu2',
      degree: 'Intermediate ',
      institution: 'Sasi Junnior College',
      duration: '2019 - 2021',
      description: 'Completed my Intermediate education with a focus on Mathematics, Physics, and Chemistry. Achieved a score of 95% in the final exams.'
    },
    {
      id: 'edu3',
      degree: 'Metriculation',
      institution: 'Sasi High School',
      duration: '2018',
      description: 'Completed my SSC with a focus on Mathematics and Science. Achieved a score of 95% in the final exams.'
    }
  ];

  const handleEducationClick = (id: string) => {
    setSelectedEducation(id === selectedEducation ? null : id);
  };

  return (
    <div className="h-full bg-gray-100 overflow-y-auto">
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Education</h2>
        <p className="text-sm text-gray-600 mb-4">My academic background</p>
      </div>

      {educationList.map((edu) => (
        <div 
          key={edu.id}
          className="bg-white mb-3 mx-3 rounded-lg shadow-sm overflow-hidden"
          onClick={() => handleEducationClick(edu.id)}
        >
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-sm text-gray-700">{edu.institution}</p>
              </div>
              <div className="bg-whatsapp-light rounded-full p-2">
                <BookOpen className="h-4 w-4 text-whatsapp" />
              </div>
            </div>
            
            <div className="flex items-center mt-2 text-xs text-gray-500">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{edu.duration}</span>
            </div>

            {selectedEducation === edu.id && (
              <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-600 animate-fade-in">
                {edu.description}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationScreen;
