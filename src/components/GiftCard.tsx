import React, { useState } from 'react';
import { Gift } from '../types';
import { GiftIcon, UserCircle, ExternalLink, Lock } from 'lucide-react';

interface GiftCardProps {
  gift: Gift;
  onReserve: (id: string, name?: string) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({ gift, onReserve }) => {
  const [isNameInputVisible, setIsNameInputVisible] = useState(false);
  const [isPasswordInputVisible, setIsPasswordInputVisible] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleReserveClick = () => {
    if (gift.reserved) {
      setIsPasswordInputVisible(true);
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

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'sad-sereja') {
      onReserve(gift.id);
      setPassword('');
      setIsPasswordInputVisible(false);
      setError('');
    } else {
      setError('WRONG PASSWORD!');
      setPassword('');
    }
  };

  return (
    <div className={`gift-card relative overflow-hidden rounded-none ${gift.reserved ? 'reserved-item' : ''}`}>
      <div className="absolute top-0 right-0 bg-[#e52521] text-white font-pixel text-xs px-2 py-1 z-10">
        1-UP
      </div>
      <div className="relative h-48 overflow-hidden">
        <img 
          src={gift.imageUrl} 
          alt={gift.name}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <a 
          href={gift.storeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 left-2 p-2 bg-black/80 rounded-none border-2 border-[#ffd700] text-[#ffd700] hover:bg-[#ffd700] hover:text-black transition-colors"
          title="Open Shop"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      
      <div className="p-4 bg-black/90">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start">
            <div className="pixel-coin mr-2"></div>
            <h3 className={`text-xl font-pixel text-[#ffd700] ${gift.reserved ? 'line-through' : ''}`}>
              {gift.name}
            </h3>
          </div>
          <span className="text-[#ff6b1a] font-pixel">
            {gift.price}
          </span>
        </div>
        
        <p className={`mb-4 text-sm font-pixel text-[#1a9c1a] ${gift.reserved ? 'line-through' : ''}`}>
          {gift.description}
        </p>

        {gift.reservedBy && (
          <div className="flex items-center mb-4 px-3 py-2 bg-[#1a9c1a]/20 border-2 border-[#1a9c1a]">
            <UserCircle className="w-4 h-4 text-[#1a9c1a] mr-2" />
            <p className="text-sm font-pixel text-[#1a9c1a]">
              PLAYER: <span className="text-[#ffd700]">{gift.reservedBy}</span>
            </p>
          </div>
        )}
        
        {isNameInputVisible ? (
          <form onSubmit={handleNameSubmit} className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ENTER YOUR NAME"
              className="retro-input w-full mb-2 font-pixel text-sm"
              autoFocus
              maxLength={20}
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="retro-btn retro-btn-green flex-1 font-pixel text-sm"
              >
                START
              </button>
              <button
                type="button"
                onClick={() => setIsNameInputVisible(false)}
                className="retro-btn retro-btn-red flex-1 font-pixel text-sm"
              >
                BACK
              </button>
            </div>
          </form>
        ) : isPasswordInputVisible ? (
          <form onSubmit={handlePasswordSubmit} className="mb-4">
            <div className="flex items-center mb-2">
              <Lock className="w-4 h-4 text-[#ffd700] mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="ENTER PASSWORD"
                className="retro-input w-full font-pixel text-sm"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-[#e52521] text-sm font-pixel mb-2">{error}</p>
            )}
            <div className="flex gap-2">
              <button
                type="submit"
                className="retro-btn retro-btn-red flex-1 font-pixel text-sm"
              >
                UNLOCK
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsPasswordInputVisible(false);
                  setError('');
                  setPassword('');
                }}
                className="retro-btn flex-1 font-pixel text-sm"
              >
                BACK
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={handleReserveClick}
            className={`retro-btn w-full font-pixel text-sm ${gift.reserved ? 'retro-btn-red' : 'retro-btn-green'}`}
          >
            {gift.reserved ? 'GAME OVER' : 'PRESS START'}
          </button>
        )}
      </div>
    </div>
  );
};

export default GiftCard;
