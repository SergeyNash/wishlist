import React, { useState } from 'react';
import { Gift } from '../types';
import { GiftIcon, UserCircle, ExternalLink } from 'lucide-react';

interface GiftCardProps {
  gift: Gift;
  onReserve: (id: string, name?: string) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, onReserve }) => {
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const [name, setName] = useState('');

  const handleReserveClick = () => {
    if (gift.reserved) {
      onReserve(gift.id);
      return;
    }
    setIsNameInputVisible(true);
  };

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onReserve(gift.id, name.trim());
      setName('');
      setIsNameInputVisible(false);
    }
  };

  return (
    <div 
      className={`gift-card relative overflow-hidden border border-purple-500 rounded-md hover:scale-102 transition-transform duration-200 ${
        gift.reserved ? 'opacity-75' : 'neon-border-purple hover:glitch-effect'
      }`}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={gift.imageUrl} 
          alt={gift.name}
          className={`w-full h-full object-cover transition-all duration-300 ${
            gift.reserved ? 'grayscale blur-[1px]' : 'hover:scale-110'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent"></div>
        <a 
          href={gift.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 right-2 p-2 bg-dark/80 rounded-full border border-cyan-500 text-cyan-400 hover:bg-cyan-900/30 transition-colors neon-border-cyan"
          title="Открыть в магазине"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start">
            <GiftIcon className="w-5 h-5 text-green-400 mr-2 glow-text-green" />
            <h3 
              className={`text-xl font-pixel-secondary text-pink-500 glow-text-pink ${
                gift.reserved ? 'line-through' : ''
              }`}
            >
              {gift.name}
            </h3>
          </div>
          <span className="text-cyan-400 font-pixel-secondary glow-text-cyan">
            {gift.price}
          </span>
        </div>
        
        <p 
          className={`mb-4 text-sm text-gray-300 ${
            gift.reserved ? 'line-through' : ''
          }`}
        >
          {gift.description}
        </p>

        {gift.reservedBy && (
          <div className="flex items-center mb-4 px-3 py-2 bg-purple-900/20 rounded border border-purple-500/30">
            <UserCircle className="w-4 h-4 text-purple-400 mr-2" />
            <p className="text-sm text-purple-300">
              Забронировал(а): <span className="text-purple-200 font-semibold">{gift.reservedBy}</span>
            </p>
          </div>
        )}
        
        {isNameInputVisible ? (
          <form onSubmit={handleNameSubmit} className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Введите ваше имя"
              className="w-full px-3 py-2 mb-2 bg-dark border border-green-500 rounded text-green-400 placeholder-green-700 font-pixel-secondary focus:outline-none focus:border-green-400 neon-border-green"
              autoFocus
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="flex-1 py-2 px-4 border border-green-500 bg-transparent text-sm font-pixel text-green-400 hover:bg-green-900/30 neon-border-green neon-flicker-slow glow-text-green"
              >
                OK
              </button>
              <button
                type="button"
                onClick={() => setIsNameInputVisible(false)}
                className="flex-1 py-2 px-4 border border-red-500 bg-transparent text-sm font-pixel text-red-400 hover:bg-red-900/30 neon-border-red glow-text-red"
              >
                ОТМЕНА
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleReserveClick}
            className={`w-full py-2 px-4 border bg-transparent text-sm font-pixel transition-all duration-300 ${
              gift.reserved
                ? 'border-red-500 text-red-400 hover:bg-red-900/30 neon-border-red glow-text-red'
                : 'border-green-500 text-green-400 hover:bg-green-900/30 neon-border-green neon-flicker-slow glow-text-green'
            }`}
          >
            {gift.reserved ? 'ОТМЕНИТЬ БРОНЬ' : 'ЗАБРОНИРОВАТЬ'}
          </button>
        )}
      </div>
    </div>
  );
};

export default GiftCard;