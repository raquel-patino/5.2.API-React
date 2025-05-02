import { useEffect, useState} from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    street_type: '',
    street_name: '',
    postcode: '',
    city: '',
    country: '',
    telephone: '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get('/users');
        setForm(prev => ({
          ...prev,
          ...data.user,
        }));
      } catch (err) {
        setError('No se pudo cargar tu perfil.');
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { ...form };
    if (form.password.trim() === '') {
      delete payload.password;
    }

    try {
      const { data } = await api.put('/users', payload);
      setSuccess(data.message);
      setError('');
        setTimeout(() => {
            navigate('/'); // Redirigir a la página de inicio o donde desees
        }, 2000); // Esperar 2 segundos antes de redirigir
    } catch (err) {
      const message = err.response?.data?.message || 'Error al actualizar perfil.';
      setError(message);
      setSuccess('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mi Perfil</h2>
      <form onSubmit={handleSubmit}>

        <label>Nombre:</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Apellido:</label>
        <input name="surname" value={form.surname} onChange={handleChange} />

        <label>Nombre de usuario:</label>
        <input name="username" value={form.username} onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required />

        <label>Contraseña (solo si deseas cambiarla):</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />

        <label>Tipo de calle:</label>
        <input name="street_type" value={form.street_type} onChange={handleChange} />

        <label>Nombre de la calle:</label>
        <input name="street_name" value={form.street_name} onChange={handleChange} />

        <label>Código postal:</label>
        <input name="postcode" value={form.postcode} onChange={handleChange} />

        <label>Ciudad:</label>
        <input name="city" value={form.city} onChange={handleChange} />

        <label>País:</label>
        <input name="country" value={form.country} onChange={handleChange} />

        <label>Teléfono:</label>
        <input name="telephone" value={form.telephone} onChange={handleChange} />

        <br /><br />
        <button type="submit">Guardar cambios</button>
      </form>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Profile;
