import React from "react";

type ClientCardProps = {
  name: string;
  date: string;
  amount: string;
};

const ClientCard: React.FC<ClientCardProps> = ({ name, date, amount }) => {
  return (
    <div className=" p-2 flex justify-between items-center mb-2">
      
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      
      <span className="text-blue-500 font-bold">{amount}</span>
    </div>
  );
};

export default ClientCard;