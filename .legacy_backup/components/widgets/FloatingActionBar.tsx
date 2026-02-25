"use client";

import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  ArrowUp,
  Sun,
  Cloud,
  Cloudy,
  Moon,
  Wind,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
// import { InvokeLLM } from '@/api/integrations'; // API not present

export default function FloatingActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [dubaiTime, setDubaiTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [weather, setWeather] = useState<{ temperature: number; icon: string } | null>(null);

  const whatsappUrl = "https://wa.me/91XXXXXXXXXX";
  const phone = "+91 0000000000";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Indira+Super+Speciality+Hospital+Vellore";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Use IST for Indira Hospital
      const timeOptions: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: true };
      setDubaiTime(now.toLocaleTimeString('en-US', timeOptions));

      const hour = parseInt(now.toLocaleTimeString('en-GB', { timeZone: 'Asia/Kolkata', hour: 'numeric' }));
      if (hour >= 5 && hour < 12) {
        setGreeting('Good Morning');
      } else if (hour >= 12 && hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  // Mock weather for now to avoid broken API call
  useEffect(() => {
    setWeather({ temperature: 30, icon: 'Sun' });
  }, []);

  const weatherIcons: Record<string, any> = { Sun, Cloud, Cloudy, Moon, Wind };
  const WeatherIcon = weather && weatherIcons[weather.icon] ? weatherIcons[weather.icon] : Sun;

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(13, 148, 136, 0.4); } 
          50% { box-shadow: 0 8px 40px rgba(13, 148, 136, 0.8); }
        }
        .action-hub {
          animation: float 3s ease-in-out infinite;
        }
        .action-hub button {
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          animation: pulse 2s ease-in-out infinite;
        }
        .action-hub:hover button {
          transform: scale(0.95);
          animation: none;
        }
        .action-hub .petal {
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
          opacity: 0;
          transform: translateY(10px) scale(0.5);
        }
        .action-hub:hover .petal-1 { transform: translateY(-85px) scale(1); opacity: 1; transition-delay: 0s; }
        .action-hub:hover .petal-2 { transform: translateX(-100px) scale(1); opacity: 1; transition-delay: 0.1s; }
        .action-hub:hover .petal-3 { transform: translateX(100px) scale(1); opacity: 1; transition-delay: 0.1s; }
        .led-panel {
          background: linear-gradient(135deg, #0d9488 0%, #115e59 100%); /* Teal */
          box-shadow: 0 0 15px rgba(13, 148, 136, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        .led-text { color: #fff; text-shadow: 0 0 5px rgba(0,0,0,0.5); }
      `}</style>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="action-hub group relative flex items-center justify-center">

          {/* Central Hub - Image */}
          <button className="relative w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 shadow-2xl flex items-center justify-center">
            {/* <img 
              src="/logo.png" 
              alt="Indira Hospital"
              className="w-16 h-16 rounded-full object-cover border-4 border-teal-300"
            /> */}
            <span className="text-white font-bold text-xs">Indira Hospital</span>
          </button>

          {/* Petal 1: Info Panel (Top) */}
          <div className="petal petal-1 absolute led-panel p-2 rounded-lg shadow-lg w-64 text-center">
            <div className="led-text text-sm font-bold">WELCOME TO INDIRA HOSPITAL</div>
            <div className="led-text text-xs opacity-90">Vellore, Tamil Nadu</div>
            <div className="mt-1 flex items-center justify-center gap-2 led-text text-xs">
              <span>{dubaiTime}</span>
              {weather && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <WeatherIcon className="w-3 h-3" />
                    <span>{Math.round(weather.temperature)}°C</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Petal 2: Left Buttons (Call & WhatsApp) */}
          <div className="petal petal-2 absolute flex gap-2">
            <a href={`tel:${phone}`} title="Call Now">
              <Button size="icon" className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white shadow-lg transition-all hover:scale-110">
                <Phone className="w-5 h-5" />
              </Button>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" title="WhatsApp">
              <Button size="icon" className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg transition-all hover:scale-110">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
          </div>

          {/* Petal 3: Right Buttons (Directions & Scroll Up) */}
          <div className="petal petal-3 absolute flex gap-2">
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer" title="Get Directions">
              <Button size="icon" className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg transition-all hover:scale-110">
                <MapPin className="w-5 h-5" />
              </Button>
            </a>
            <Button size="icon" onClick={scrollToTop} title="Back to Top" className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-lg transition-all hover:scale-110">
              <ArrowUp className="w-5 h-5" />
            </Button>
          </div>

        </div>
      </div>
    </>
  );
}
