
import React, { useState } from 'react';
import Header from './Header';
import ChatBox from './ChatBox';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ProfileScreenProps {
  onBackClick: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onBackClick }) => {
  const [viewingTestimonials, setViewingTestimonials] = useState(false);
  
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Balu",
      position: "Product Manager at TechCorp",
      content: "John is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
      avatar: "BK Pic_1.jpg"
    },
    {
      id: 2,
      name: "Karthik",
      position: "CTO at StartupX",
      content: "Working with John was a pleasure. He understands complex requirements quickly and translates them into elegant code solutions.",
      rating: 5,
      avatar: "BK Pic_2.jpg"
    },
    {
      id: 3,
      name: "Karthiii",
      position: "UI/UX Designer",
      content: "John's technical skills combined with his eye for design make him a rare talent. He's my go-to developer for translating designs into reality.",
      rating: 4,
      avatar: "BK Pic_3.jpg"
    }
  ];

  // Initial messages to simulate a conversation
  const initialMessages = [
    {
      id: 1,
      text: "👋 Hello there! I'm John Doe, a Full Stack Developer with 5+ years of experience.",
      time: "10:00 AM",
      isMe: false
    },
    {
      id: 2,
      text: "Welcome to my interactive portfolio chat. Feel free to explore my projects and skills!",
      time: "10:01 AM",
      isMe: false
    },
    {
      id: 3,
      text: "Hi! I'm interested in learning more about your work.",
      time: "10:05 AM",
      isMe: true
    },
    {
      id: 4,
      text: "Great! I specialize in React, Node.js, and modern JavaScript frameworks. I've built several web applications for clients in finance, e-commerce, and healthcare sectors.",
      time: "10:06 AM",
      isMe: false
    },
    {
      id: 5,
      text: "My most recent project was a real-time analytics dashboard for a fintech startup that helped them visualize customer data and improve decision making.",
      time: "10:07 AM",
      isMe: false
    },
    {
      id: 6,
      text: "Would you like to see what others have said about working with me? Click the 'View Testimonials' button below!",
      time: "10:08 AM",
      isMe: false
    }
  ];

  if (viewingTestimonials) {
    return (
      <div className="flex flex-col h-full">
        <Header 
          title="Testimonials" 
          avatarSrc="BK Pic.png" 
          onBackClick={() => setViewingTestimonials(false)} 
        />
        
        <div className="flex-1 bg-gray-50 p-4 overflow-y-auto">
          <p className="text-gray-600 text-sm mb-4">What clients and colleagues say about me</p>
          
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                          <img src={testimonial.avatar} alt={testimonial.name} className="h-full w-full object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">{testimonial.position}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      
                      <p className="text-gray-700">{testimonial.content}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 space-x-2">
              <CarouselPrevious className="relative left-0 right-0 translate-y-0" />
              <CarouselNext className="relative left-0 right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <Header 
        title="Balu Karthik" 
        avatarSrc="BK Pic.png" 
        onBackClick={onBackClick} 
      />
      <div className="flex flex-col h-full">
        <ChatBox 
          initialMessages={initialMessages}
          onViewTestimonials={() => setViewingTestimonials(true)}
        />
        <div className="bg-gray-100 p-3 flex justify-center">
          <Button 
            variant="default"
            className="bg-whatsapp text-white hover:bg-whatsapp/90 flex items-center gap-2"
            onClick={() => setViewingTestimonials(true)}
          >
            <MessageCircle className="h-4 w-4" />
            <span>View Testimonials</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;