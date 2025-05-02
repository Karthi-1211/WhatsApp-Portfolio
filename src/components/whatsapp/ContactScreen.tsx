import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { toast } from "sonner";

const ContactScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      message,
      subject: "WhatsApp Portfolio",
      access_key: "764ec9a4-f4f7-4da3-8eb6-2cb0f0e6a61d",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-gray-100 overflow-y-auto p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Me</h2>
      
      <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
        <div className="flex items-center mb-3">
          <div className="bg-whatsapp rounded-full p-2 mr-3">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">Email</p>
            <a href="mailto:john.doe@example.com" className="text-whatsapp text-sm">balukarthik1308@gmail.com</a>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="bg-whatsapp rounded-full p-2 mr-3">
            <Phone className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">Phone</p>
            <a href="tel:+1234567890" className="text-whatsapp text-sm">+91 9515607788</a>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <div className="bg-whatsapp rounded-full p-2 mr-3">
            <Linkedin className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">LinkedIn</p>
            <a href="https://www.linkedin.com/in/balu-karthik/" target="_blank" rel="noopener noreferrer" className="text-whatsapp text-sm">Linkedin</a>
          </div>
        </div>
        
        <div className="flex items-center">
          <div className="bg-whatsapp rounded-full p-2 mr-3">
            <Github className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium">GitHub</p>
            <a href="https://github.com/Karthi-1211" target="_blank" rel="noopener noreferrer" className="text-whatsapp text-sm">Github</a>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-lg font-medium mb-3">Send me a message</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-whatsapp"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-whatsapp"
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message"
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-whatsapp"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-whatsapp text-white py-2 px-4 rounded-lg flex items-center justify-center w-full disabled:opacity-50"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactScreen;