import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

const Navbar = () => {
  const { user, logout: clearAuth } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); // ✅ ya hace la lógica de borrar token y usuario
      navigate('/temp'); // redirige a ruta temporal
      setTimeout(() => navigate('/Home', { replace: true }), 0); // vuelve al Home y fuerza re-render
    } catch (err) {
      console.error('Error al cerrar sesión:', err);
      alert('No se pudo cerrar sesión.');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('¿Seguro que quieres eliminar tu cuenta? Esta acción es irreversible.')) return;

    try {
      await api.delete('/users');
      clearAuth();
      localStorage.removeItem('token');
      navigate('/Home');
    } catch (err) {
      console.error('Error al eliminar cuenta:', err);
      alert('No se pudo eliminar la cuenta.');
    }
  };

  if (!user) return null;

  return (
    <nav style={{ backgroundColor: '#f4f4f4', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/Home" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
        {user.user_type === 'admin' && (
          <Link to="/admin/users" style={{ marginRight: '1rem' }}>👑 Admin</Link>
        )}
      </div>
      <div>
        <Link to="/profile">
          <button style={{ marginRight: '1rem' }}>Modificar perfil</button>
        </Link>
        <button onClick={handleDelete} style={{ marginRight: '1rem', backgroundColor: '#e74c3c', color: 'white' }}>
          Eliminar cuenta
        </button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
