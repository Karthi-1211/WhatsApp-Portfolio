
import React from 'react';
import { MessageCircle, Users, GraduationCap, Star, Phone } from 'lucide-react';

interface TabMenuProps {
  activeTab: 'chats' | 'status' | 'calls' | 'education' | 'achievements';
  onTabChange: (tab: 'chats' | 'status' | 'calls' | 'education' | 'achievements') => void;
}

const TabMenu: React.FC<TabMenuProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-whatsapp-dark text-white flex">
      {[
        { id: 'chats', label: 'PORTFOLIO', icon: MessageCircle },
        { id: 'status', label: 'SKILLS', icon: Users },
        { id: 'education', label: 'EDUCATION', icon: GraduationCap },
        { id: 'achievements', label: 'AWARDS', icon: Star },
        { id: 'calls', label: 'CONTACT', icon: Phone },
      ].map((tab) => (
        <div 
          key={tab.id} 
          className={`flex-1 text-center py-3 ${activeTab === tab.id ? 'border-b-4 border-white' : 'opacity-80'}`}
          onClick={() => onTabChange(tab.id as 'chats' | 'status' | 'calls' | 'education' | 'achievements')}
        >
          <tab.icon className="mx-auto mb-1" size={18} />
          <span className="text-xs">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TabMenu;
