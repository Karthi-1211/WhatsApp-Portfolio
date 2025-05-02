
import React, { useState } from 'react';
import StatusItem from './StatusItem';

interface SkillsScreenProps {
  onSkillClick?: (skill: any) => void;
}

const SkillsScreen: React.FC<SkillsScreenProps> = ({ onSkillClick }) => {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const skills = [
    { id: 'frontend', title: 'Frontend', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=300&h=300', details: 'React, Angular, Vue.js, HTML5, CSS3, JavaScript' },
    { id: 'backend', title: 'Backend', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=300&h=300', details: 'Node.js, Express, Django, Flask, PHP' },
    { id: 'database', title: 'Database', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&h=300', details: 'MongoDB, PostgreSQL, MySQL,Firebase' },
    { id: 'IoT', title: 'IoT', img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=300&h=300', details: 'Arduino,ESP32,ESP8266,ESP32 Cam' },
  ];

  const handleSkillClick = (skillId: string) => {
    setActiveSkill(skillId === activeSkill ? null : skillId);
    if (onSkillClick) {
      const skill = skills.find(s => s.id === skillId);
      onSkillClick(skill);
    }
  };

  return (
    <div className="h-full bg-gray-100">
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">My Skills</h2>
        <p className="text-sm text-gray-600 mb-3">Tap on a skill to see details</p>
      </div>

      <div className="flex overflow-x-auto p-2 pb-4">
        {skills.map((skill) => (
          <StatusItem 
            key={skill.id}
            title={skill.title}
            imgSrc={skill.img}
            isActive={activeSkill === skill.id}
            onClick={() => handleSkillClick(skill.id)}
          />
        ))}
      </div>

      {activeSkill && (
        <div className="p-4 bg-white rounded-t-2xl border-t border-gray-200 animate-message-fade-in">
          <h3 className="font-semibold text-gray-800 mb-2">
            {skills.find(s => s.id === activeSkill)?.title}
          </h3>
          <p className="text-gray-600">
            {skills.find(s => s.id === activeSkill)?.details}
          </p>
        </div>
      )}
    </div>
  );
};

export default SkillsScreen;
