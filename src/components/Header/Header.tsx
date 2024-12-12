import React from "react";
import NotificationIcon from "./NotificationIcon";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h2 className="text-xl font-bold">Inicio</h2>
      <NotificationIcon />
    </header>
  );
};

export default Header;