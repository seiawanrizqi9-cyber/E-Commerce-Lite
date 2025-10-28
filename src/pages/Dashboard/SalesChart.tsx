import React from 'react';

const SalesChart: React.FC = () => {
  // Mock sales data
  const salesData = [
    { month: 'Jan', sales: 4000 },
    { month: 'Feb', sales: 3000 },
    { month: 'Mar', sales: 5000 },
    { month: 'Apr', sales: 4500 },
    { month: 'May', sales: 6000 },
    { month: 'Jun', sales: 5500 },
  ];

  const maxSales = Math.max(...salesData.map(d => d.sales));

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Sales Overview</h3>
      <div className="space-y-4">
        {salesData.map((item) => (
          <div key={item.month} className="flex items-center space-x-4">
            <div className="w-16 text-sm font-medium text-gray-600">{item.month}</div>
            <div className="flex-1">
              <div
                className="bg-linear-to-r from-blue-500 to-purple-500 rounded-full h-6 transition-all duration-500 hover:scale-105"
                style={{ width: `${(item.sales / maxSales) * 100}%` }}
              ></div>
            </div>
            <div className="w-20 text-right font-semibold text-gray-700">
              ${item.sales.toLocaleString()}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Total: ${salesData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}</span>
          <span>+15% from last period</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;