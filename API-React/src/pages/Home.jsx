import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

const Home = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    navigate('/Home'); // o '/' si tu ruta es la raíz
  };
  


  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Bienvenido a <span style={{ color: '#3498db' }}>Luxury Hotels ✨</span></h1>
        <p>Descubre y reserva hoteles increíbles en todo el mundo.</p>

        {user ? (
          <div>
            <p>Hola, <strong>{user.name}</strong> 👋</p>

            <Link to="/hotels">
              <button style={{ margin: '0.5rem' }}>Ir a buscar hoteles</button>
            </Link>

            <Link to="/reservations">
              <button style={{ margin: '0.5rem' }}>Ver mis reservas</button>
            </Link>

            <Link to="/profile">
              <button style={{ margin: '0.5rem' }}>Mi perfil</button>
            </Link>

            {user.user_type === 'admin' && (
              <Link to="/admin/users">
                <button
                  style={{
                    marginTop: '1rem',
                    backgroundColor: '#2c3e50',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  👑 Administrar usuarios
                </button>
              </Link>
            )}

            <button
              onClick={handleLogout}
              style={{
                marginTop: '1rem',
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button style={{ margin: '0.5rem' }}>Iniciar sesión</button>
            </Link>
            <Link to="/register">
              <button className="alt-button" style={{ margin: '0.5rem' }}>Registrarse</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};


export default Home;

