import React from 'react';
import { SparklesIcon } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center py-8 border-t border-purple-900/50 mt-8">
      <p className="text-base md:text-lg font-pixel-secondary text-cyan-400 glow-text-cyan">
        <SparklesIcon className="inline-block w-4 h-4 mr-1 mb-1" />
        Спасибо! Ты — 8-битное чудо 
        <span className="ml-1 text-green-400 glow-text-green">💾</span>
      </p>
      <p className="text-sm text-purple-400 mt-2 opacity-80">
        {currentYear} | Дата праздника: 08.05.{currentYear}
      </p>
    </footer>
  );
};

export default Footer;