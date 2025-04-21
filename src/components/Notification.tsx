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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-slide-down">
      <div className="px-6 py-3 bg-black border-4 border-[#ffd700] text-[#ffd700] font-pixel">
        <p className="text-sm flex items-center gap-2">
          <span className="text-[#e52521]">★</span>
          WORLD 1-1: {notification.message}
        </p>
      </div>
    </div>
  );
}

export default Notification;