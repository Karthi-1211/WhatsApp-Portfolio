
import React, { useState, useEffect, useRef } from 'react';
import ChatBubble from './ChatBubble';
import TypingIndicator from './TypingIndicator';
import { Smile, Paperclip, Mic, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  time: string;
  isMe: boolean;
}

interface ChatBoxProps {
  initialMessages: Message[];
  onViewTestimonials?: () => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ initialMessages, onViewTestimonials }) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, showTyping]);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMsg = {
      id: messages.length + 1,
      text: newMessage,
      time: timeString,
      isMe: true
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Handle special commands
    if (newMessage.toLowerCase().includes('testimonial')) {
      setTimeout(() => {
        if (onViewTestimonials) {
          onViewTestimonials();
        }
      }, 1000);
      return;
    }
    
    // Simulate response after user sends a message
    setShowTyping(true);
    setTimeout(() => {
      setShowTyping(false);
      const responseOptions = [
        "That sounds interesting! Tell me more about your experience.",
        "Great! I'd love to see more examples of your work.",
        "That's impressive. Do you have any projects related to this?",
        "Excellent background! What are your goals for the future?",
        "Thanks for sharing! Are there any specific skills you want to highlight?"
      ];
      
      const responseMsg = {
        id: messages.length + 2,
        text: responseOptions[Math.floor(Math.random() * responseOptions.length)],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isMe: false
      };
      
      setTimeout(() => {
        setMessages(msgs => [...msgs, responseMsg]);
      }, 1000);
    }, 2000);
  };

  return (
    <div className="flex flex-col h-full">
      <div 
        className="flex-1 p-4 overflow-y-auto bg-gray-50"
      >
        {messages.map((msg, index) => (
          <ChatBubble 
            key={msg.id} 
            message={msg.text} 
            timestamp={msg.time} 
            isMe={msg.isMe}
            animate={index === messages.length - 1} 
          />
        ))}
        
        {showTyping && <TypingIndicator />}
        
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <div className="bg-gray-100 p-3 flex items-center">
        <Smile className="text-gray-500 h-6 w-6 mr-2 cursor-pointer" />
        <Paperclip className="text-gray-500 h-6 w-6 mr-2 cursor-pointer" />
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 py-2 px-4 rounded-full bg-white focus:outline-none"
          placeholder="Type a message"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
        />
        {newMessage ? (
          <button 
            onClick={handleSendMessage}
            className="ml-2 bg-whatsapp rounded-full p-2 text-white"
          >
            <Send className="h-5 w-5" />
          </button>
        ) : (
          <Mic className="text-gray-500 h-6 w-6 ml-2 cursor-pointer" />
        )}
      </div>
    </div>
  );
};

export default ChatBox;