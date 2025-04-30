import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';

const Home = () => {
    const { user } = useAuth();
  
    return (
      <div className="home-container">
        <div className="home-box">
          <h1>Bienvenido a <span style={{ color: '#3498db' }}>Luxury Hotels ✨</span></h1>
          <p>Descubre y reserva hoteles increíbles en todo el mundo.</p>
  
          {user ? (
            <div>
              <p>Hola, <strong>{user.name}</strong> 👋</p>
              <Link to="/hotels">
                <button>Ir a buscar hoteles</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button>Iniciar sesión</button>
              </Link>
              <Link to="/register">
                <button className="alt-button">Registrarse</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Home;
