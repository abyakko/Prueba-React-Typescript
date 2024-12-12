import React from "react";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white flex flex-col">
      <h1 className="text-2xl font-bold px-4 py-6">
        <span className="text-blue-400">  
          Smart
        </span>
        Water
      </h1>
      <nav className="flex-1">
        <ul>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Inicio</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Clientes</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Mapa de clientes</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Monitoreo de Distribuidores</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Ventas</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Pedidos</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Préstamos</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Finanzas</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Reportes</li>
          <li className="px-4 py-3 border border-transparent hover:bg-white hover:text-black hover:border-blue-700 cursor-pointer">Configuracion</li>
        </ul>
      </nav>
      <button className="mt-auto px-4 py-3 bg-white hover:bg-blue-300 text-black">Salir</button>
    </aside>
  );
};

export default Sidebar;