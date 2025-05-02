
import React from 'react';
import { ArrowLeft, MoreVertical, Phone, Video } from 'lucide-react';
import { Avatar } from "@/components/ui/avatar";

interface HeaderProps {
  title: string;
  avatarSrc?: string;
  onBackClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title, 
  avatarSrc = "/placeholder.svg", 
  onBackClick 
}) => {
  return (
    <div className="bg-whatsapp-dark text-white p-3 flex items-center sticky top-0 z-10">
      <div className="flex items-center flex-1">
        {onBackClick && (
          <button onClick={onBackClick} className="mr-2">
            <ArrowLeft size={24} />
          </button>
        )}
        <Avatar className="h-10 w-10 mr-3">
          <img src={avatarSrc} alt={title} className="h-full w-full object-cover" />
        </Avatar>
        <div>
          <h2 className="font-semibold">{title}</h2>
          <p className="text-xs text-slate-300">Online</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <Video className="cursor-pointer" size={20} />
        <Phone className="cursor-pointer" size={20} />
        <MoreVertical className="cursor-pointer" size={20} />
      </div>
    </div>
  );
};

export default Header;
