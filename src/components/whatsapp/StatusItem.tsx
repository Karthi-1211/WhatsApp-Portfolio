
import React from 'react';
import { Avatar } from "@/components/ui/avatar";

interface StatusItemProps {
  title: string;
  imgSrc: string;
  isActive?: boolean;
  onClick?: () => void;
}

const StatusItem: React.FC<StatusItemProps> = ({ 
  title, 
  imgSrc, 
  isActive = false,
  onClick
}) => {
  return (
    <div 
      className="flex flex-col items-center mx-2 cursor-pointer"
      onClick={onClick}
    >
      <div className={`p-[2px] rounded-full mb-1 ${isActive ? 'bg-gradient-to-tr from-whatsapp to-green-300' : 'bg-gray-300'}`}>
        <Avatar className="h-16 w-16 border-2 border-white">
          <img src={imgSrc} alt={title} className="h-full w-full object-cover" />
        </Avatar>
      </div>
      <span className="text-xs text-center w-16 truncate">{title}</span>
    </div>
  );
};

export default StatusItem;
