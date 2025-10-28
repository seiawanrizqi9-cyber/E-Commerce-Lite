import React from 'react';
import { useToast } from '../../contexts/ToastContext';

const Toast: React.FC = () => {
  const { toast, hideToast } = useToast();

  if (!toast) return null;

  return (
    <div
      className={`flex items-center p-4 rounded-lg shadow-lg border transform transition-all duration-300 ease-in-out ${
        toast.type === 'success'
          ? 'bg-green-50 border-green-200 text-green-800'
          : toast.type === 'error'
          ? 'bg-red-50 border-red-200 text-red-800'
          : 'bg-blue-50 border-blue-200 text-blue-800'
      }`}
      style={{ 
        position: 'fixed',
        top: '80px', // Tepat di bawah navbar
        right: '24px', // Sejajar dengan icon keranjang
        zIndex: 50,
        minWidth: '300px'
      }}
    >
      <div className="flex items-center space-x-3 flex-1">
        {/* Cart Icon */}
        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
          <span className="text-emerald-600 text-sm">🛒</span>
        </div>
        <div className="flex-1">
          <span className="text-sm font-medium block">{toast.message}</span>
          <span className="text-xs text-gray-500 mt-1">Item added to your cart</span>
        </div>
      </div>
      <button
        onClick={hideToast}
        className="ml-4 text-gray-400 hover:text-gray-600 transition-colors text-lg"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;