import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Hotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState('');
  const [dates, setDates] = useState({
    check_in: '',
    check_out: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  

  const handleChange = (e) => {
    setDates({ ...dates, [e.target.name]: e.target.value });
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const { data } = await api.get('/hotels', {
        params: {
          check_in: dates.check_in,
          check_out: dates.check_out,
        },
      });
      //console.log('Respuesta real:', data);
      setHotels(data["Available hotels"]);
      setError('');
    } catch (err) {
      setHotels([]);
      const errorMsg = err.response?.data?.message || 'Error al buscar hoteles';
      setError(errorMsg);
    }
  };

  return (
    <div>
      <h1>Buscar hoteles disponibles</h1>
      <form onSubmit={handleSearch}>
        <label>Check-in:</label>
        <input type="date" name="check_in" value={dates.check_in} onChange={handleChange} required />
        <label>Check-out:</label>
        <input type="date" name="check_out" value={dates.check_out} onChange={handleChange} required />
        <button type="submit">Buscar</button>
      </form>
    

      {submitted && !hotels.length && !error && <p>No se encontraron hoteles disponibles</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
      {hotels.map((hotel) => (
        <li key={hotel.id} style={{ cursor: 'pointer' }} onClick={() => navigate(`/hotels/${hotel.id}/rooms`, { state: dates })}>
        <h3>{hotel.name}</h3>
        <p>Descripción: {hotel.description}</p>
        <p>País: {hotel.country}</p>
        <p>Contacto: {hotel.telephone_number}</p>
        </li>
    ))}
      </ul>
    </div>
  );
};

export default Hotels;

