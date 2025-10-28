import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, password: string): boolean => {
    if (password === 'Admin1234#') {
      setUser({ username, role: 'admin' });
      return true;
    } else if (username && password) {
      setUser({ username, role: 'user' });
      return true;
    }
    return false;
  };

  const logout = (): void => {
    setUser(null);
  };

  const isAdmin = (): boolean => {
    return user?.role === 'admin';
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isAdmin
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};