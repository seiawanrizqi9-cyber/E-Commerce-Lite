import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../hooks/useCart';
import ThemeToggle from '../UI/ThemeToggle';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string): boolean => location.pathname === path;

  const handleOpenCart = () => {
    const event = new CustomEvent('toggleCart');
    window.dispatchEvent(event);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          🛍️ E-Commerce Lite
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-1">
          {/* Main Links */}
          <Link
            to="/"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              isActive('/') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            Home
          </Link>
          
          <Link
            to="/products"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              isActive('/products') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            Products
          </Link>
          
          <Link
            to="/about"
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              isActive('/about') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            About
          </Link>

          {/* Dashboard */}
          <button
            onClick={() => navigate('/dashboard')}
            className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
              isActive('/dashboard') 
                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            Dashboard
          </button>

          {/* Spacer */}
          <div className="w-4"></div>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Cart */}
          <div className="relative">
            <button
              onClick={handleOpenCart}
              className="relative p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              aria-label="Shopping Cart"
            >
              <span className="text-lg">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Auth Section */}
          {user ? (
            <div className="flex items-center space-x-3 ml-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-300 hidden sm:block">
                  {user.username}
                </span>
              </div>
              <button
                onClick={logout}
                className="px-3 py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors ml-2"
              aria-label="Login"
            >
              👤
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;