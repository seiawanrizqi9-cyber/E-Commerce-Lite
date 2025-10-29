import React from 'react';
import { useToast } from '../../contexts/ToastContext';

const Toast: React.FC = () => {
  const { toast, hideToast } = useToast();

  if (!toast) return null;

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-lg border transform transition-all duration-300 ease-in-out ${
        toast.type === 'success'
          ? 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-300'
          : toast.type === 'error'
          ? 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-300'
          : 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-300'
      }`}
      style={{ 
        position: 'fixed',
        top: '80px',
        right: '24px',
        zIndex: 50,
        minWidth: '300px'
      }}
    >
      <div className="flex items-center space-x-3 flex-1">
        {/* Cart Icon */}
        <div className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
          <span className="text-emerald-600 dark:text-emerald-400 text-sm">🛒</span>
        </div>
        <div className="flex-1">
          <span className="text-sm font-medium block">{toast.message}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">Item added to your cart</span>
        </div>
      </div>
      <button
        onClick={hideToast}
        className="ml-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-lg"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;