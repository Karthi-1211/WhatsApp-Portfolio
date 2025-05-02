
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex mb-3 justify-start">
      <div className="bg-whatsapp-bubble-other p-3 rounded-lg">
        <div className="flex space-x-1">
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-typing-dot-1"></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-typing-dot-2"></div>
          <div className="h-2 w-2 bg-gray-500 rounded-full animate-typing-dot-3"></div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
