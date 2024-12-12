import React from "react";
import ClientCard from "./ClientCard";
import PlaceOrderComp from "./PlaceOrderComp";

const QuickActions: React.FC = () => {
  return (
    <div>

        <h3 className="text-lg font-bold mb-2">Acciones rápidas</h3>
    <div className="flex gap-4 mt-4">
      <div className="col-span-2">
        <div className="w-[447px] h-64 p-6 bg-white rounded-lg shadow-lg">
        <ClientCard name="Daniela Ayala" date="20/01/2023" amount="100 Bs" />
        <ClientCard name="Rubén González" date="20/01/2023" amount="100 Bs" />
        <ClientCard name="Mariana Reyes" date="20/01/2023" amount="100 Bs" />
        <ClientCard name="Julio Espinoza" date="20/01/2023" amount="100 Bs" />
        </div>
      </div>
      <PlaceOrderComp />
    </div>
    </div>
  );
};

export default QuickActions;