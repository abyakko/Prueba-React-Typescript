import React from "react";
import ClientCard from "./ClientCard";
import OrderForm from "./OrderForm";

const QuickActions: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="col-span-2">
        <h3 className="text-lg font-bold mb-2">Clientes</h3>
        <ClientCard name="Daniela Ayala" date="20/01/2023" amount="100 Bs" />
        <ClientCard name="Rubén González" date="20/01/2023" amount="100 Bs" />
      </div>
      <OrderForm />
    </div>
  );
};

export default QuickActions;