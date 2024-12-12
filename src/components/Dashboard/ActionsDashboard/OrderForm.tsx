import React from "react";

const OrderForm: React.FC = () => {
  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-bold mb-2">Realizar pedido</h3>
      <form>
        <select className="w-full p-2 border rounded mb-2">
          <option>Cliente</option>
        </select>
        <select className="w-full p-2 border rounded mb-2">
          <option>Botellón de 20 Lts</option>
        </select>
        <input
          type="number"
          className="w-full p-2 border rounded mb-2"
          placeholder="Cantidad"
        />
        <button className="w-full p-2 bg-blue-500 text-white rounded">Realizar pedido</button>
      </form>
    </div>
  );
};

export default OrderForm;