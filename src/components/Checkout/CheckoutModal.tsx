import React, { useState, useEffect } from 'react';
import { useCart } from '../../hooks/useCart';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

interface ShippingOption {
  id: string;
  name: string;
  desc: string;
  price: number;
}

const CheckoutModal: React.FC = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginRequired, setShowLoginRequired] = useState(false);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [shipping, setShipping] = useState('reguler');

  const shippingOptions: ShippingOption[] = [
    { id: 'reguler', name: 'Reguler', desc: '3–5 hari', price: 8000 },
    { id: 'express', name: 'Express', desc: '1–2 hari', price: 9000 },
    { id: 'cargo', name: 'Cargo', desc: '5–7 hari', price: 5000 },
  ];

  useEffect(() => {
    const checkCheckout = () => {
      const shouldOpen = localStorage.getItem('openCheckout') === 'true';
      if (shouldOpen) {
        if (!user) {
          setShowLoginRequired(true);
          localStorage.removeItem('openCheckout');
        } else {
          setIsVisible(true);
        }
      }
    };

    checkCheckout();
    
    window.addEventListener('storage', checkCheckout);
    window.addEventListener('checkoutToggle', checkCheckout);

    return () => {
      window.removeEventListener('storage', checkCheckout);
      window.removeEventListener('checkoutToggle', checkCheckout);
    };
  }, [user]);

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingOptions.find(opt => opt.id === shipping)?.price || 0;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      setShowLoginRequired(true);
      return;
    }

    if (!name || !address || !phone) {
      alert('Harap lengkapi data pengiriman.');
      return;
    }

    // Process order
    clearCart();
    localStorage.removeItem('openCheckout');
    setIsVisible(false);
    
    if (confirm('Pesanan berhasil! Ingin pesan lagi?')) {
      navigate('/products');
    } else {
      navigate('/');
    }
  };

  const handleClose = () => {
    localStorage.removeItem('openCheckout');
    setIsVisible(false);
    setShowLoginRequired(false);
    window.dispatchEvent(new Event('storage'));
  };

  const handleLoginRedirect = () => {
    localStorage.setItem('shouldOpenCheckoutAfterLogin', 'true');
    setShowLoginRequired(false);
    navigate('/login');
  };

  // Modal Login Required
  if (showLoginRequired) {
    return (
      <>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 text-center">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Login Required</h2>
            <p className="text-gray-600 mb-6">
              You need to be logged in to complete your purchase. Please login to continue with checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleLoginRedirect}
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Login Now
              </button>
              <button
                onClick={() => setShowLoginRequired(false)}
                className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50" />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-10 px-4 overflow-y-auto">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl p-6 relative my-8">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-xl transition-colors p-1 hover:bg-gray-100 rounded-full"
            aria-label="Tutup"
          >
            ✕
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Konfirmasi Pesanan</h2>
          
          {/* User Info */}
          {user && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700">
                Logged in as: <span className="font-semibold">{user.username}</span>
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nama Penerima</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Nama lengkap penerima"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Nomor Telepon</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="08xxxxxxxxxx"
                  required
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-gray-700 mb-2 font-medium">Alamat Lengkap</label>
                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  rows={3}
                  placeholder="Alamat lengkap pengiriman"
                  required
                />
              </div>
            </div>

            {/* Shipping Options */}
            <div>
              <h3 className="font-medium text-gray-900 mb-4 text-lg">Pilih Opsi Pengiriman</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {shippingOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setShipping(option.id)}
                    className={`p-4 border-2 rounded-xl text-left transition-all duration-200 ${
                      shipping === option.id
                        ? 'border-blue-600 bg-blue-50 shadow-sm'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{option.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                    <div className="mt-2 font-bold text-blue-600">
                      Rp{option.price.toLocaleString('id-ID')}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="border-t pt-6">
              <h3 className="font-medium text-gray-900 mb-4 text-lg">Ringkasan Pesanan</h3>
              
              {/* Cart Items */}
              <div className="space-y-3 max-h-40 overflow-y-auto pr-2 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-sm bg-gray-50 rounded-lg p-3">
                    <div className="flex-1 min-w-0">
                      <span className="font-medium text-gray-800">
                        {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                      </span>
                      <span className="text-gray-600 ml-2">× {item.quantity}</span>
                    </div>
                    <span className="font-semibold text-gray-800 whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Price Breakdown */}
              <div className="space-y-2 text-sm border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Barang:</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ongkos Kirim:</span>
                  <span className="font-medium">Rp{shippingCost.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-3 border-t">
                  <span>Total Bayar:</span>
                  <span className="text-blue-600">
                    ${subtotal.toFixed(2)} + Rp{shippingCost.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex gap-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Batalkan
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
              >
                Pesan Sekarang
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutModal;