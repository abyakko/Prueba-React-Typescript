import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold px-4 py-6">SmartWater</h1>
      <nav className="flex-1">
        <ul>
          <li className="px-4 py-3 hover:bg-blue-700 cursor-pointer">Inicio</li>
          <li className="px-4 py-3 hover:bg-blue-700 cursor-pointer">Clientes</li>
          <li className="px-4 py-3 hover:bg-blue-700 cursor-pointer">Pedidos</li>
        </ul>
      </nav>
      <button className="mt-auto px-4 py-3 bg-red-600 hover:bg-red-500">Salir</button>
    </aside>
  );
};

export default Sidebar;
