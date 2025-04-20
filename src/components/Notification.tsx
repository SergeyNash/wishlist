import React, { useEffect } from 'react';
import { NotificationState } from '../types';

interface NotificationProps {
  notification: NotificationState;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ notification, onClose }) => {
  useEffect(() => {
    if (notification.visible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [notification.visible, onClose]);

  if (!notification.visible) return null;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 animate-bounce-in">
      <div className="px-6 py-3 bg-black border-2 border-green-500 text-green-400 font-pixel neon-border-green">
        <p className="text-sm">
          ТЫ ВЫБРАЛ: {notification.message}
        </p>
      </div>
    </div>
  );
};

export default Notification;