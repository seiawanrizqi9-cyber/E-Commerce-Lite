import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import Button from '../UI/Button';

interface PrivateRouteProps {
  children: React.ReactElement;
  adminOnly?: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ 
  children, 
  adminOnly = false 
}) => {
  const { user, isAdmin } = useAuth();
  const [showModal, setShowModal] = useState(!user || (adminOnly && !isAdmin()));

  // Jika user belum login
  if (!user) {
    return (
      <>
        {children}
        
        {/* Modal Login Required */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center border border-white/20 shadow-2xl">
              <div className="text-6xl mb-4">🔒</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Login Required</h2>
              <p className="text-gray-600 mb-6">
                You need to be logged in to access this page. Please login to continue.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => window.location.href = '/login'}
                  className="flex-1"
                >
                  🔐 Login Now
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    window.history.back();
                  }}
                  className="flex-1"
                >
                  ← Go Back
                </Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  // Jika adminOnly tapi user bukan admin
  if (adminOnly && !isAdmin()) {
    return (
      <>
        {children}
        
        {/* Modal Admin Access Required */}
        {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8 max-w-md w-full text-center border border-white/20 shadow-2xl">
              <div className="text-6xl mb-4">🚫</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Admin Access Required</h2>
              <p className="text-gray-600 mb-6">
                This page is restricted to administrators only. 
                {user.role === 'user' 
                  ? " You are logged in as a regular user." 
                  : " You don't have sufficient permissions."
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => window.location.href = '/'}
                  className="flex-1"
                >
                  🏠 Go Home
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setShowModal(false);
                    window.history.back();
                  }}
                  className="flex-1"
                >
                  ← Go Back
                </Button>
              </div>
              
              {/* Admin Login Hint */}
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Admin Access:</strong> Use password <code>Admin1234#</code> to login as admin
                </p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return children;
};

export default PrivateRoute;