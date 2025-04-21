import React, { useState } from 'react';
import Header from './components/Header';
import GiftList from './components/GiftList';
import Footer from './components/Footer';
import Notification from './components/Notification';
import { defaultGifts } from './data/gifts';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Gift, NotificationState } from './types';

function App() {
  const [gifts, setGifts] = useLocalStorage<Gift[]>('birthday-gifts', defaultGifts);
  const [notification, setNotification] = useState<NotificationState>({
    visible: false,
    message: ''
  });

  const handleReserveGift = (id: string, name?: string) => {
    const updatedGifts = gifts.map(gift => {
      if (gift.id === id) {
        const updatedGift = { 
          ...gift, 
          reserved: !gift.reserved,
          reservedBy: !gift.reserved ? name : undefined
        };
        setNotification({
          visible: true,
          message: updatedGift.reserved 
            ? `${updatedGift.name} - ${name}`
            : `${updatedGift.name} UNLOCKED`
        });
        return updatedGift;
      }
      return gift;
    });
    
    setGifts(updatedGifts);
  };

  const closeNotification = () => {
    setNotification({
      visible: false,
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-retro-overlay flex flex-col relative">
      <div className="container mx-auto flex-grow flex flex-col px-4">
        <Header />
        <main className="flex-grow">
          <GiftList gifts={gifts} onReserve={handleReserveGift} />
        </main>
        <Footer />
      </div>
      
      <Notification 
        notification={notification} 
        onClose={closeNotification} 
      />
    </div>
  );
}

export default App;