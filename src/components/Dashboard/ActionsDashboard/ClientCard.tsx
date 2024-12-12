import React from "react";

type ClientCardProps = {
  name: string;
  date: string;
  amount: string;
};

const ClientCard: React.FC<ClientCardProps> = ({ name, date, amount }) => {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex justify-between items-center mb-2">
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
      <span className="text-blue-500 font-bold">{amount}</span>
    </div>
  );
};

export default ClientCard;