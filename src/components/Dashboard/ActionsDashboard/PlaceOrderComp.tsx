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


  const [selectedClient, setSelectedClient] = useState<number | "">("");
  const [selectedProduct, setSelectedProduct] = useState<number | "">("");
  const [quantity, setQuantity] = useState<number>(1);
  const [price] = useState<number>(15); // Precio de cada producto

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


  const handleSubmit = (): void => {
  alert(`Cliente: ${selectedClient}\nProducto: ${selectedProduct}\nCantidad: ${quantity}\nTotal: ${quantity * price} Bs`);
};


  return (
    <div className="w-[447px] h-64 p-3 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-lg font-bold text-gray-800">Realizar pedido</h2>

      <div className="mb-4">
        <select
          id="client"
          className="w-full h-9 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={selectedClient}
          onChange={handleClientChange}
        >
          {clientOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <select
          id="product"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          value={selectedProduct}
          onChange={handleProductChange}
        >
          {productOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex mb-4 gap-10">
        <div className=" p-1 h-9 justify-center w-64 border border-gray-300 rounded-lg shadow-sm flex items-center space-x-2">
        <label className=" mb-2 text-sm font-medium text-gray-700 w-32">
          Cantidad:
        </label>
          <button
            onClick={() => handleQuantityChange("decrement")}
            className="px-3 text-gray-700 bg-gray-200 rounded-full focus:outline-none"
          >
            -
          </button>
          <span className="px-4  text-lg font-medium text-gray-800 bg-gray-100 border rounded-md">
            {quantity}
          </span>
          <button
            onClick={() => handleQuantityChange("increment")}
            className="px-3  text-gray-700 bg-gray-200 rounded-full focus:outline-none"
          >
            +
          </button>
        </div>
          <div className="gap-16 w-32 flex items-center border border-gray-300 rounded-lg shadow-sm">

          <input
            type="text"
            value={quantity * price}
            disabled
            className=" ml-2 text-right bg-gray-100 border rounded-md w-6"
          />
          <div className="">

          <span className="ml-2 text-gray-700 ">Bs</span>
          </div>
          </div>
      </div>
      <div className="flex justify-end">

      <button
        onClick={handleSubmit}
        className="h-9 w-32 text-xs px-4 py-2 font-bold text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Realizar pedido
      </button>
      </div>
    </div>
  );
};

export default OrderForm;
