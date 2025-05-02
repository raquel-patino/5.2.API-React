import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api/axios';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/'); // o '/' si tu ruta es la raíz
  };

  const handleDeleteAccount = async () => {
    const confirmed = window.confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.');
  
    if (!confirmed) return;
  
    try {
      await api.delete('/users');
      await logout(); // revoca token y limpia sesión
      navigate('/', { replace: true });
    } catch (err) {
      console.error('Error al eliminar cuenta:', err);
      alert('No se pudo eliminar la cuenta.');
    }
  };

  if (!user) return null;

  return (
    <nav style={{ backgroundColor: '#f4f4f4', padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <Link to="/" style={{ marginRight: '1rem' }}>🏠 Inicio</Link>
        {user?.user_type === 'admin' && (
          <Link to="/admin/users" style={{ marginRight: '1rem' }}>👑 Admin</Link>
        )}
      </div>
      <div>
        <Link to="/profile">
          <button style={{ marginRight: '1rem' }}>Modificar perfil</button>
        </Link>
        <button onClick={handleDeleteAccount} style={{ marginRight: '1rem', backgroundColor: '#e74c3c', color: 'white' }}>
          Eliminar cuenta
        </button>
        <button onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </nav>
  );
};

export default Navbar;
