import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login: React.FC = () => {
  const [role, setRole] = useState<"User" | "Admin">("User");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as LocationState)?.from?.pathname || "/";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Admin validation
    if (role === "Admin") {
      if (password !== "Admin1234#") {
        setError("Password admin salah. Harus: Admin1234#");
        return;
      }
    }

    // Login dengan role yang dipilih dan fallback values
    const username = name || (role === "Admin" ? "Admin" : "User");
    const success = login(username, password);

    if (success) {
      // Checkout redirection logic
      const shouldOpenCheckout = localStorage.getItem(
        "shouldOpenCheckoutAfterLogin"
      );
      if (shouldOpenCheckout) {
        localStorage.removeItem("shouldOpenCheckoutAfterLogin");
        localStorage.setItem("openCheckout", "true");
      }
      navigate(from, { replace: true });
    } else {
      setError("Login gagal. Silakan coba lagi.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Login
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 mb-3 font-medium">
              Login Sebagai
            </label>
            <div className="flex space-x-6">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={role === "User"}
                  onChange={() => setRole("User")}
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">User</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  checked={role === "Admin"}
                  onChange={() => setRole("Admin")}
                  className="mr-3 w-4 h-4 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-gray-700">Admin</span>
              </label>
            </div>
          </div>

          {/* Name Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Nama Lengkap
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="Nama Anda"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="email@example.com"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2 font-medium">
              Password {role === "Admin" && "(Harus: Admin1234#)"}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 text-sm">
          Belum punya akun? Login sebagai User bebas!
        </p>

        {/* Demo Credentials Info */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-medium text-gray-800 mb-2">
            Demo Credentials:
          </h3>
          <div className="text-xs text-gray-600 space-y-1">
            <p>
              <strong>Admin:</strong> password = <code>Admin1234#</code>
            </p>
            <p>
              <strong>User:</strong> nama/email bebas + password bebas
            </p>
          </div>
        </div>

        {/* Role Information */}
        <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-sm font-medium text-blue-800 mb-2">
            Perbedaan Role:
          </h3>
          <div className="text-xs text-blue-700 space-y-1">
            <p>
              <strong>User:</strong> Bisa belanja, lihat produk, tapi tidak bisa
              akses Dashboard
            </p>
            <p>
              <strong>Admin:</strong> Bisa akses Dashboard untuk melihat laporan
              penjualan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
