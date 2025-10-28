import React from 'react';

interface RevenueData {
  category: string;
  revenue: number;
  growth: number;
  trend: 'up' | 'down';
}

const RevenueTable: React.FC = () => {
  const revenueData: RevenueData[] = [
    { category: 'Electronics', revenue: 45000, growth: 12.5, trend: 'up' },
    { category: 'Clothing', revenue: 32000, growth: 8.2, trend: 'up' },
    { category: 'Home & Garden', revenue: 28000, growth: -2.1, trend: 'down' },
    { category: 'Sports', revenue: 15000, growth: 15.7, trend: 'up' },
    { category: 'Books', revenue: 12000, growth: 5.3, trend: 'up' },
  ];

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Revenue by Category</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left pb-4 font-semibold text-gray-600">Category</th>
              <th className="text-right pb-4 font-semibold text-gray-600">Revenue</th>
              <th className="text-right pb-4 font-semibold text-gray-600">Growth</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((item) => (
              <tr key={item.category} className="border-b border-gray-100 last:border-0">
                <td className="py-4 font-medium text-gray-800">{item.category}</td>
                <td className="py-4 text-right font-semibold text-gray-800">
                  {formatCurrency(item.revenue)}
                </td>
                <td className={`py-4 text-right font-semibold ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.trend === 'up' ? '↗' : '↘'} {Math.abs(item.growth)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200 text-sm text-gray-600">
        <p>Total Revenue: {formatCurrency(revenueData.reduce((sum, item) => sum + item.revenue, 0))}</p>
      </div>
    </div>
  );
};

export default RevenueTable;