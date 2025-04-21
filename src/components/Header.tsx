import React from 'react';
import { Gamepad2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 md:py-12 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-[#e52521]"></div>
      <div className="relative inline-block">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-[#ffd700] mb-2 drop-shadow-[0_2px_0_#000]">
          <Gamepad2 className="inline-block w-8 h-8 mr-2 mb-1 animate-bounce" />
          ДЕНЬ РОЖДЕНИЯ 2025
        </h1>
      </div>
      <p className="text-lg md:text-xl font-pixel text-[#1a9c1a] mt-4 drop-shadow-[0_2px_0_#000]">
        ЧТОБЫ НАЧАТЬ ВЫБЕРИТЕ ПОДАРОК
      </p>
      <div className="mt-6 flex justify-center items-center gap-4">
        <div className="pixel-coin"></div>
        <span className="font-pixel text-[#ff6b1a] text-sm">×</span>
        <span className="font-pixel text-[#ffd700] text-lg">30</span>
      </div>
      <div className="mt-4 font-pixel text-xs text-[#1a9c1a]">
        PLAYER 1 - READY!
      </div>
    </header>
  );
};

export default Header;
