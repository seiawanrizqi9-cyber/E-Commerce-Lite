import React, { createContext, useContext, useCallback, ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Product, CartItem, CartContextType } from '../types';

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const addToCart = useCallback((product: Product): void => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, [setCartItems]);

  const removeFromCart = useCallback((id: number): void => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }, [setCartItems]);

  const updateQuantity = useCallback((id: number, quantity: number): void => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart, setCartItems]);

  const clearCart = useCallback((): void => {
    setCartItems([]);
  }, [setCartItems]);

  const getCartItemCount = useCallback((id: number): number => {
    const item = cartItems.find(item => item.id === id);
    return item ? item.quantity : 0;
  }, [cartItems]);

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartItemCount,
    cartTotal,
    cartCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Export hook separately to fix ESLint error
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};