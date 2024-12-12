import React from "react";

const DashboardCards: React.FC = () => {
  const cards = [
    { title: "Clientes nuevos", value: "18", change: "+8.2%" },
    { title: "Préstamos activos", value: "25", change: "+8.2%" },
    { title: "Pedidos totales", value: "1,236", change: "+8.2%" },
    { title: "Ingresos totales", value: "1,783 Bs", change: "+8.2%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div key={index} className="p-4 bg-white shadow rounded-lg">
          <h3 className="text-sm font-medium text-gray-500">{card.title}</h3>
          <p className="text-2xl font-bold">{card.value}</p>
          <p className="text-sm text-green-500">{card.change}</p>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
