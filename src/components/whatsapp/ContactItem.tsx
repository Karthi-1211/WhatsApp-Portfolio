
import React from 'react';
import { Avatar } from "@/components/ui/avatar";

interface ContactItemProps {
  name: string;
  message: string;
  time: string;
  imgSrc: string;
  unread?: number;
  onClick?: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  name, 
  message, 
  time, 
  imgSrc, 
  unread = 0,
  onClick
}) => {
  return (
    <div 
      className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
      onClick={onClick}
    >
      <Avatar className="h-12 w-12 mr-3">
        <img src={imgSrc} alt={name} className="h-full w-full object-cover" />
      </Avatar>
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
      {unread > 0 && (
        <div className="bg-whatsapp text-white text-xs rounded-full h-5 w-5 flex items-center justify-center ml-2">
          {unread}
        </div>
      )}
    </div>
  );
};

export default ContactItem;
