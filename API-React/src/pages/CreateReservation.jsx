import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../api/axios';

const CreateReservation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [numberGuests, setNumberGuests] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  if (!state) {
    return <p style={{ color: 'red' }}>No se han proporcionado datos para la reserva.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        hotel_id: state.hotel_id,
        room_id: state.room_id,
        check_in: state.check_in,
        check_out: state.check_out,
        number_guests: numberGuests,
      };

      const { data } = await api.post('/reservations', payload);
      setSuccess(data.message);
      setError('');
      setTimeout(() => navigate('/reservations'), 2000);
    } catch (err) {
      if (err.response?.status === 409) {
        setError('La habitación ya no está disponible para esas fechas.');
      } else {
        setError('Error al crear la reserva.');
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Confirmar Reserva</h2>
      <p><strong>Hotel:</strong> {state.hotel_name}</p>
      <p><strong>Habitación:</strong> {state.room_name}</p>
      <p><strong>Desde:</strong> {state.check_in}</p>
      <p><strong>Hasta:</strong> {state.check_out}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Número de huéspedes:
          <input
            type="number"
            value={numberGuests}
            onChange={(e) => setNumberGuests(parseInt(e.target.value))}
            min={1}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Confirmar reserva</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default CreateReservation;

