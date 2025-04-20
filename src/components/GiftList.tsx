import React from 'react';
import GiftCard from './GiftCard';
import { Gift } from '../types';

interface GiftListProps {
  gifts: Gift[];
  onReserve: (id: string, name?: string) => void;
}

const GiftList: React.FC<GiftListProps> = ({ gifts, onReserve }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-6">
      {gifts.map(gift => (
        <GiftCard 
          key={gift.id} 
          gift={gift} 
          onReserve={onReserve} 
        />
      ))}
    </div>
  );
};

export default GiftList;