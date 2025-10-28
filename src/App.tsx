import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ToastProvider } from "./contexts/ToastContext";
import { ThemeProvider } from "./contexts/ThemeProvider";
import Navbar from "./components/Layout/Navbar";
import PrivateRoute from "./components/Layout/PrivateRoute";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorBoundary from "./components/UI/ErrorBoundary";
import CartSidebar from "./components/Cart/CartSidebar";
import CheckoutModal from "./components/Checkout/CheckoutModal";
import Toast from "./components/UI/Toast";
import "./App.css";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              <Router>
                <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                  <Navbar />
                  <main className="container mx-auto px-4 py-8">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/products" element={<Products />} />
                      <Route path="/products/:id" element={<ProductDetail />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/login" element={<Login />} />
                      <Route
                        path="/dashboard"
                        element={
                          <PrivateRoute adminOnly>
                            <Dashboard />
                          </PrivateRoute>
                        }
                      />
                      <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                  </main>

                  {/* Cart Sidebar */}
                  <CartSidebar />

                  {/* Checkout Modal */}
                  <CheckoutModal />

                  {/* Toast Notifications */}
                  <Toast />
                </div>
              </Router>
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;