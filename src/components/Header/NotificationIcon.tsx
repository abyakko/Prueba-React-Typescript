import React from "react";

const NotificationIcon: React.FC = () => {
  return (
    <div className="relative">
      <div className="w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center">
        🔔
      </div>
      <span className="absolute top-0 right-0 size-3 bg-red-500 rounded-full"></span>
    </div>
  );
};

export default NotificationIcon;