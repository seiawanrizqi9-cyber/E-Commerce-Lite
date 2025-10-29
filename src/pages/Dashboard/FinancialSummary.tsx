import React from 'react';

interface FinancialSummaryProps {
  data: {
    totalRevenue: number;
    totalSales: number;
    activeUsers: number;
    conversionRate: number;
  };
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({ data }) => {
  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-linear-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-blue-100 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold mt-2">{formatCurrency(data.totalRevenue)}</p>
          </div>
          <div className="text-3xl">💰</div>
        </div>
      </div>

      <div className="bg-linear-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-emerald-100 text-sm">Total Sales</p>
            <p className="text-2xl font-bold mt-2">{data.totalSales.toLocaleString()}</p>
          </div>
          <div className="text-3xl">📦</div>
        </div>
      </div>

      <div className="bg-linear-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-purple-100 text-sm">Active Users</p>
            <p className="text-2xl font-bold mt-2">{data.activeUsers.toLocaleString()}</p>
          </div>
          <div className="text-3xl">👥</div>
        </div>
      </div>

      <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-orange-100 text-sm">Conversion Rate</p>
            <p className="text-2xl font-bold mt-2">{data.conversionRate}%</p>
          </div>
          <div className="text-3xl">📊</div>
        </div>
      </div>
    </div>
  );
};

export default FinancialSummary;