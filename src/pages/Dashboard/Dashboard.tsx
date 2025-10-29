import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import FinancialSummary from './FinancialSummary';
import SalesChart from './SalesChart';
import RevenueTable from './RevenueTable';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const dashboardData = {
    totalRevenue: 125430,
    totalSales: 2845,
    activeUsers: 1234,
    conversionRate: 3.2,
    monthlyGrowth: 12.5,
    averageOrder: 156.78,
    refundRate: 1.2,
    customerSatisfaction: 4.8
  };

  const quickStats = [
    { value: '2,845', label: 'Total Orders', change: '+12%', icon: '📦' },
    { value: '1,234', label: 'Active Users', change: '+8%', icon: '👥' },
    { value: '4.8', label: 'Avg Rating', change: '+0.2', icon: '⭐' },
    { value: '+12.5%', label: 'Monthly Growth', change: 'On track', icon: '📈' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          📊 Admin Dashboard
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Welcome back, <span className="font-semibold text-blue-600 dark:text-blue-400">{user?.username}</span>
        </p>
      </div>

      {/* Financial Summary */}
      <FinancialSummary data={dashboardData} />

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        <div>
          <RevenueTable />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-4 sm:grid-cols-2 gap-6">
        {quickStats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 text-center h-32 flex flex-col justify-center"
          >
            <div className="text-2xl mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm mb-1">{stat.label}</div>
            <div className="text-green-600 dark:text-green-400 text-xs font-medium">{stat.change}</div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors text-center h-20 flex items-center justify-center">
            📊 View Reports
          </button>
          <button className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg text-green-600 dark:text-green-400 font-medium hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors text-center h-20 flex items-center justify-center">
            👥 Manage Users
          </button>
          <button className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors text-center h-20 flex items-center justify-center">
            📦 Inventory
          </button>
          <button className="p-4 bg-orange-50 dark:bg-orange-900/30 rounded-lg text-orange-600 dark:text-orange-400 font-medium hover:bg-orange-100 dark:hover:bg-orange-900/50 transition-colors text-center h-20 flex items-center justify-center">
            ⚙️ Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;