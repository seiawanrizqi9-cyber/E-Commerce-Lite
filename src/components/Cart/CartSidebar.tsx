import React, { useState, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { CartItem } from '../../types';
import Button from '../UI/Button';

const CartSidebar: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart, cartTotal } = useCart();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggleCart = () => {
      setIsOpen(!isOpen);
    };

    window.addEventListener('toggleCart', handleToggleCart);
    
    return () => {
      window.removeEventListener('toggleCart', handleToggleCart);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const sidebar = document.getElementById('cart-sidebar');
      const backdrop = document.getElementById('cart-backdrop');
      
      if (sidebar && !sidebar.contains(e.target as Node) && 
          backdrop && backdrop.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleQuantityChange = (item: CartItem, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, newQuantity);
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    
    if (!user) {
      // Show login required in checkout modal
      localStorage.setItem('openCheckout', 'true');
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('checkoutToggle'));
    } else {
      // User is logged in, proceed to checkout
      localStorage.setItem('openCheckout', 'true');
      window.dispatchEvent(new Event('storage'));
      window.dispatchEvent(new CustomEvent('checkoutToggle'));
    }
    
    setIsOpen(false);
  };

  const handleClearCart = () => {
    if (cartItems.length === 0) {
      alert('Keranjang sudah kosong!');
      return;
    }
    
    if (confirm('Apakah Anda yakin ingin mengosongkan keranjang?')) {
      clearCart();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        id="cart-backdrop"
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-300"
      />
      
      {/* Sidebar */}
      <div 
        id="cart-sidebar"
        className="fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col transform transition-transform duration-300 ease-in-out"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-xs">🛒</span>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">Shopping Cart</h2>
              <p className="text-xs text-gray-500">{cartItems.length} items</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 text-xl transition-colors p-1 hover:bg-gray-100 rounded-full"
            aria-label="Close cart"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-3 text-gray-300">🛒</div>
              <h3 className="text-base font-semibold text-gray-800 mb-2">Your cart is empty</h3>
              <p className="text-gray-600 mb-4 text-sm">Add some products to get started!</p>
              <Button
                onClick={() => setIsOpen(false)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex items-center space-x-3 bg-gray-50 rounded-lg p-3 transition-all duration-200 hover:bg-gray-100 border border-gray-200"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-contain bg-white rounded border border-gray-200"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-xs line-clamp-2 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-blue-600 font-bold text-xs mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-xs hover:bg-gray-100 transition-colors shadow-sm"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span className="text-xs font-medium w-6 text-center text-gray-700 bg-white py-1 rounded border">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          className="w-6 h-6 bg-white border border-gray-300 rounded-full flex items-center justify-center text-xs hover:bg-gray-100 transition-colors shadow-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1 transition-colors hover:bg-red-50 rounded-full"
                        title="Remove item"
                        aria-label="Remove item"
                      >
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer - Hanya tampil jika ada items */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-4 space-y-3 bg-white">
            {/* Total */}
            <div className="flex justify-between items-center text-base font-bold">
              <span className="text-gray-700">Total:</span>
              <span className="text-blue-600">${cartTotal.toFixed(2)}</span>
            </div>

            {/* Login Notice */}
            {!user && (
              <div className="p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-xs text-yellow-700 text-center">
                  🔒 Login required for checkout
                </p>
              </div>
            )}

            {/* Buttons */}
            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                className="w-full py-2 text-sm font-medium"
              >
                {user ? '🛒 Checkout Now' : '🔒 Login to Checkout'}
              </Button>
              <Button
                variant="outline"
                onClick={handleClearCart}
                size="sm"
                className="w-full py-2 text-sm font-medium hover:bg-red-50 hover:text-red-700 hover:border-red-300 transition-colors"
              >
                🗑️ Clear Cart
              </Button>
            </div>

            {/* Continue Shopping */}
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs text-gray-600 hover:text-gray-800 py-1 transition-colors"
            >
              ← Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;