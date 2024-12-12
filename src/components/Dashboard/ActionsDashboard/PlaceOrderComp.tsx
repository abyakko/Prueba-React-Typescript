import React, { useState } from "react";

type Option = {
  id: number;
  label: string;
};

const OrderForm: React.FC = () => {
  // Opciones para los selects
  const clientOptions: Option[] = [
    { id: 1, label: "Cliente 1" },
    { id: 2, label: "Cliente 2" },
    { id: 3, label: "Cliente 3" },
  ];

  const productOptions: Option[] = [
    { id: 1, label: "Botellón de 20 Lts" },
    { id: 2, label: "Botella de 2 Lts" },
    { id: 3, label: "Botella de 1 Lt" },
  ];

  // Estados
  const [selectedClient, setSelectedClient] = useState<number | "">("");
  const [selectedProduct, setSelectedProduct] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price] = useState<number>(15); // Precio fijo como ejemplo

  // Manejar cambios
  const handleClientChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedClient(Number(e.target.value));
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedProduct(Number(e.target.value));
  };

  const handleQuantityChange = (type: "increment" | "decrement") => {
    setQuantity((prev) => {
      if (type === "increment") return prev + 1;
      return prev > 1 ? prev - 1 : 1;
    });
  };

  const handleSubmit = () => {
    console.log("Cliente:", selectedClient);
    console.log("Producto:", selectedProduct);
    console.log("Cantidad:", quantity);
    console.log("Total:", quantity * price);
  };

  return (
    <div className="w-[447px] p-6 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-lg font-bold text-gray-800">Realizar pedido</h2>

      <div className="mb-4">
        <label
          htmlFor="client"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Cliente
        </label>
        <select
          id="client"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={selectedClient}
          onChange={handleClientChange}
        >
{/*           <option value="" disabled>
            Seleccione un cliente
          </option> */}
          {clientOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="product"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Producto
        </label>
        <select
          id="product"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={selectedProduct}
          onChange={handleProductChange}
        >
          {/* <option value="" disabled>
            Seleccione un producto
          </option> */}
          {productOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Cantidad
        </label>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="px-3 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none"
          >
            -
          </button>
          <span className="px-4 py-2 text-lg font-medium text-gray-800 bg-gray-100 border rounded-md">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="px-3 py-2 text-gray-700 bg-gray-200 rounded-full focus:outline-none"
          >
            +
          </button>
          <input
            type="text"
            value={quantity * price}
            disabled
            className="px-3 py-2 text-right bg-gray-100 border rounded-md w-16"
          />
          <span className="text-gray-700">Bs</span>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Realizar pedido
      </button>
    </div>
  );
};

export default OrderForm;
