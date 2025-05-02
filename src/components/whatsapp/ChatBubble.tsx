
import React from 'react';
import { Check } from 'lucide-react';

interface ChatBubbleProps {
  message: string;
  timestamp: string;
  isMe: boolean;
  animate?: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
  message, 
  timestamp, 
  isMe, 
  animate = false 
}) => {
  return (
    <div 
      className={`flex mb-3 ${isMe ? 'justify-end' : 'justify-start'} ${
        animate ? 'opacity-0 animate-message-fade-in' : ''
      }`}
      style={{ animationDelay: animate ? '200ms' : '0ms' }}
    >
      <div 
        className={`max-w-[80%] md:max-w-[60%] p-3 rounded-lg relative ${
          isMe ? 'bg-whatsapp-bubble-me' : 'bg-whatsapp-bubble-other'
        }`}
      >
        <p className="text-gray-800 text-sm">{message}</p>
        <div className="flex items-center justify-end mt-1 text-[10px] text-gray-500">
          <span>{timestamp}</span>
          {isMe && (
            <Check className="h-3 w-3 ml-1 text-whatsapp" />
          )}
        </div>
        
        {/* Chat bubble tail */}
        <div 
          className={`absolute top-0 w-4 h-4 ${
            isMe 
              ? '-right-2 bg-whatsapp-bubble-me' 
              : '-left-2 bg-whatsapp-bubble-other'
          }`}
          style={{
            clipPath: isMe
              ? 'polygon(0 0, 0 100%, 100% 0)'
              : 'polygon(100% 0, 100% 100%, 0 0)'
          }}
        />
      </div>
    </div>
  );
};

export default ChatBubble;
