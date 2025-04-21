import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-8 mt-8 relative">
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#1a9c1a]"></div>
      <p className="text-base md:text-lg font-pixel text-[#ffd700]">
        <Gamepad2 className="inline-block w-4 h-4 mr-1 mb-1" />
        THANK YOU FOR PLAYING!
      </p>
      <div className="flex justify-center items-center gap-2 mt-4">
        <span className="font-pixel text-xs text-[#e52521]">CONTINUE?</span>
        <span className="font-pixel text-xs text-[#1a9c1a] animate-pulse">9</span>
      </div>
      <p className="text-sm text-[#ff6b1a] mt-4 font-pixel">
        © {currentYear} | BATTLE DATE: 08.05.{currentYear}
      </p>
    </footer>
  );
};

export default Footer;