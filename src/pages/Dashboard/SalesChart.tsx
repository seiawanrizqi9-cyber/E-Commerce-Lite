import React, { useState } from 'react';

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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const maxSales = Math.max(...salesData.map(d => d.sales));

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">Sales Overview</h3>
      <div className="space-y-4">
        {salesData.map((item, index) => {
          const percentage = (item.sales / maxSales) * 100;
          const isHovered = hoveredIndex === index;
          
          return (
            <div 
              key={item.month} 
              className="flex items-center space-x-4 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="w-16 text-sm font-medium text-gray-600 dark:text-gray-300 transition-all duration-300">
                {item.month}
              </div>
              
              <div className="flex-1 relative">
                {/* Background Bar (Static) */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-6 absolute inset-0"></div>
                
                {/* Animated Gradient Bar */}
                <div
                  className="bg-linear-to-r from-blue-500 to-purple-500 rounded-full h-6 relative transition-all duration-500 ease-out"
                  style={{ 
                    width: `${percentage}%`,
                    transform: isHovered ? 'scaleX(1.05)' : 'scaleX(1)',
                    transformOrigin: 'left center'
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div 
                    className={`absolute inset-0 bg-linear-to-r from-blue-400 to-purple-400 rounded-full opacity-0 transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : ''
                    }`}
                  ></div>
                </div>

                {/* Hover Tooltip */}
                {isHovered && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-gray-900 text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap z-10 shadow-lg">
                    ${item.sales.toLocaleString()}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1 w-2 h-2 bg-gray-800 dark:bg-gray-900 rotate-45"></div>
                  </div>
                )}
              </div>
              
              <div className={`w-20 text-right font-semibold transition-all duration-300 ${
                isHovered 
                  ? 'text-blue-600 dark:text-blue-400 scale-110' 
                  : 'text-gray-700 dark:text-gray-300'
              }`}>
                ${item.sales.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
        <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
          <span>Total: ${salesData.reduce((sum, item) => sum + item.sales, 0).toLocaleString()}</span>
          <span className="text-green-600 dark:text-green-400 font-medium">+15% from last period</span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;