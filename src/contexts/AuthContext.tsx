import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  avatar?: string;
  name?: string;
  subscription?: {
    plan: string;
    status: string;
    expiresAt: string;
  };
  credits: number;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('auth_token');
      if (token) {
        // Mock user data for development
        setUser({
          id: '1',
          email: 'john.doe@example.com',
          firstName: 'John',
          lastName: 'Doe',
          phone: '+1 (555) 123-4567',
          avatar: '',
          subscription: {
            plan: 'Growth',
            status: 'active',
            expiresAt: '2024-12-31',
          },
          credits: 750,
        });
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      // Mock login for development
      const mockUser: User = {
        id: '1',
        email: email,
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (555) 123-4567',
        avatar: '',
        subscription: {
          plan: 'Growth',
          status: 'active',
          expiresAt: '2024-12-31',
        },
        credits: 750,
      };

      localStorage.setItem('auth_token', 'mock_token');
      setUser(mockUser);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const register = async (name: string, email: string, password: string) => {
    try {
      // Mock registration for development
      const [firstName, ...lastNameParts] = name.split(' ');
      const lastName = lastNameParts.join(' ');

      const mockUser: User = {
        id: '1',
        email: email,
        firstName,
        lastName,
        phone: '',
        avatar: '',
        subscription: {
          plan: 'Free',
          status: 'active',
          expiresAt: '2024-12-31',
        },
        credits: 100,
      };

      localStorage.setItem('auth_token', 'mock_token');
      setUser(mockUser);
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    loading,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
