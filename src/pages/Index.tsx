
import React from 'react';
import WhatsAppPortfolio from '@/components/whatsapp/WhatsAppPortfolio';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-4 flex flex-col">
      <header className="text-center mb-6 mt-4">
        <h1 className="text-3xl font-bold text-whatsapp-dark">WhatsApp Portfolio</h1>
        <p className="text-gray-600 max-w-md mx-auto">
          Explore my professional journey through this interactive WhatsApp-inspired portfolio. 
          Navigate through the tabs to discover my projects, skills, education, and more!
        </p>
      </header>
      
      <div className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md h-[600px]">
          <WhatsAppPortfolio />
        </div>
      </div>
      
      <footer className="text-center py-4 mt-6">
        <p className="text-gray-600 text-sm">© 2025 Balu Karthik • Full Stack Developer</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/Karthi-1211" className="text-gray-600 hover:text-whatsapp transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/balu-karthik/" className="text-gray-600 hover:text-whatsapp transition-colors">LinkedIn</a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-gray-600 hover:text-whatsapp transition-colors">Email</a>
          <a href="https://x.com/" className="text-gray-600 hover:text-whatsapp transition-colors">Twitter</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
