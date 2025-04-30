import { createContext, useContext, useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/login', { email, password });
      localStorage.setItem('access_token', data.access_token);
      fetchUser(); // Cargar datos del usuario
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Error al iniciar sesión');
    }
  };

  const register = async (formData) => {
    const { data } = await api.post('/register', formData);
    localStorage.setItem('access_token', data.access_token);
    fetchUser();
  };

  const logout = async () => {
    await api.post('/logout');
    localStorage.removeItem('access_token');
    setUser(null);
    navigate('/login');
  };

  const fetchUser = async () => {
    try {
      const { data } = await api.get('/users');
      setUser(data);
    } catch {
      logout();
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
