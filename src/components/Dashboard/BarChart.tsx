import React from "react";

const BarChart: React.FC = () => {
  return (
    <div className="mt-4 p-4 bg-white shadow rounded-lg">
      <h3 className="text-lg font-bold mb-2">Ventas</h3>
      <div className="flex space-x-2">
        {[100, 200, 150, 300, 250].map((height, index) => (
          <div
            key={index}
            className="bg-blue-500 w-8"
            style={{ height: `${height}px` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BarChart;