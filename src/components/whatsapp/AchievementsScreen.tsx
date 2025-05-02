
import React from 'react';
import { Trophy, Award, Star } from 'lucide-react';

const AchievementsScreen: React.FC = () => {
  const achievements = [
    {
      id: 'ach1',
      title: 'Student Co-ordinator',
      organization: 'AI & IOT using Python Workshop ',
      year: '2024',
      icon: Trophy,
      color: 'bg-amber-100 text-amber-600'
    },
    {
      id: 'ach2',
      title: 'Class Representative',
      organization: 'ANITS',
      year: '2023',
      icon: Award,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'ach3',
      title: 'IOT Hackathon Winner',
      organization: 'ANITS',
      year: '2024',
      icon: Star,
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  return (
    <div className="h-full bg-gray-100 overflow-y-auto">
      <div className="p-4 pb-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Achievements & Awards</h2>
        <p className="text-sm text-gray-600 mb-4">Recognition for excellence</p>
      </div>

      <div className="grid grid-cols-1 gap-3 px-3 pb-3">
        {achievements.map((achievement) => (
          <div 
            key={achievement.id}
            className="bg-white p-4 rounded-lg shadow-sm flex items-center"
          >
            <div className={`${achievement.color} p-3 rounded-full mr-3`}>
              <achievement.icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">{achievement.title}</h3>
              <p className="text-sm text-gray-600">{achievement.organization}</p>
              <p className="text-xs text-gray-500 mt-1">{achievement.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsScreen;
