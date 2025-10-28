import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
}

interface ToastContextType {
  toast: Toast | null;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    
    // Hapus toast sebelumnya jika ada
    setToast(null);
    
    // Set timeout kecil untuk reset animation
    setTimeout(() => {
      setToast({ id, message, type });
      
      // Auto remove after 3 seconds
      setTimeout(() => {
        setToast(null);
      }, 3000);
    }, 100);
  };

  const hideToast = () => {
    setToast(null);
  };

  const value: ToastContextType = {
    toast,
    showToast,
    hideToast
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};