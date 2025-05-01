import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api/axios';




const EditReservation = () => {
  const { state } = useLocation();

  const { id } = useParams(); // reservationId
  const navigate = useNavigate();
  
  if (!state || !state.hotel_id) {
    return <p style={{ color: 'red' }}>Error: no se puede editar la reserva porque faltan datos.</p>;
  }

  const [checkIn, setCheckIn] = useState(state.check_in);
  const [checkOut, setCheckOut] = useState(state.check_out);
  const [numberGuests, setNumberGuests] = useState(state.number_guests || 1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [roomId, setRoomId] = useState(state.room_id);
  const [availableRooms, setAvailableRooms] = useState([]);


  useEffect(() => {
    const fetchAvailableRooms = async () => {
      try {
        const { data } = await api.get(`/hotels/${state.hotel_id}/rooms`, {
          params: {
            check_in: checkIn,
            check_out: checkOut
          }
        });
        console.log('Respuesta de la API:', data);
        setAvailableRooms(data.available_rooms);
        setError('');
      } catch (err) {
        setError('No se pudieron cargar habitaciones disponibles.');
      }
    };
  
    fetchAvailableRooms();
  }, [checkIn, checkOut,state.hotel_id]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        check_in: checkIn,
        check_out: checkOut,
        number_guests: numberGuests,
        room_id: roomId
      };

      const { data } = await api.put(`/reservations/${id}`, payload);
      setSuccess(data.message);
      setError('');
      setTimeout(() => navigate('/reservations'), 2000);
    } catch (err) {
      if (err.response?.status === 409) {
        setError('La habitación ya no está disponible para esas fechas.');
      } else {
        setError('Error al actualizar la reserva.');
      }
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Editar Reserva</h2>
      <p><strong>Habitación:</strong> {state.room_type}</p>
      <form onSubmit={handleSubmit}>
  <label>Check-in:</label>
  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />

  <label>Check-out:</label>
  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />

  <label>Huéspedes:</label>
  <input type="number" value={numberGuests} onChange={(e) => setNumberGuests(parseInt(e.target.value))} min={1} required />

  <label>Tipo de habitación:</label>
  <select value={roomId} onChange={(e) => setRoomId(parseInt(e.target.value))} required>
    {availableRooms.map(room => (
      <option key={room.id} value={room.id}>
        {room.type} - ${room.price}/noche
      </option>
    ))}
  </select>

  <br /><br />
  <button type="submit">Guardar cambios</button>
</form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default EditReservation;
