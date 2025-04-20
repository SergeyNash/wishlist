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
        // Show notification
        setNotification({
          visible: true,
          message: updatedGift.reserved 
            ? `${updatedGift.name} забронирован(а): ${name}`
            : `Бронь отменена: ${updatedGift.name}`
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
    <div className="bg-dark min-h-screen flex flex-col relative overflow-hidden">
      {/* Background grid */}
      <div className="fixed inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      
      {/* Neon lines */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-70"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70"></div>
      
      <div className="container mx-auto flex-grow flex flex-col">
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