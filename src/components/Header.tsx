import React from 'react';
import { MegaphoneIcon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-8 md:py-12">
      <div className="relative inline-block">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 neon-flicker drop-shadow-glow mb-2">
          <MegaphoneIcon className="inline-block w-8 h-8 mr-2 mb-1 animate-pulse" />
          МОЙ ДР 2025
        </h1>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 opacity-50 blur-md -z-10"></div>
      </div>
      <p className="text-lg md:text-xl font-pixel-secondary text-cyan-400 mt-4 glow-text-cyan drop-shadow-glow-sm">
        Выбери и заблокируй подарок
      </p>
    </header>
  );
};

export default Header;