import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import api from '../api/axios';

const Rooms = () => {
  const { id } = useParams(); // hotelId
  const { state } = useLocation(); // { check_in, check_out }
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      if (!state?.check_in || !state?.check_out) {
        setError('Faltan las fechas de check-in y check-out.');
        return;
      }

      setLoading(true);
      try {
        const { data } = await api.get(`/hotels/${id}/rooms`, {
          params: {
            check_in: state.check_in,
            check_out: state.check_out,
          },
        });
        setRooms(data.available_rooms);
        setError('');
      } catch (err) {
        setError('Error al cargar las habitaciones');
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [id, state]);

  return (
    <div>
      <h2>Habitaciones disponibles</h2>
      {loading && <p>Cargando habitaciones...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && rooms.length === 0 && !error && <p>No hay habitaciones disponibles para estas fechas.</p>}
      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <h4>{room.type}</h4>
            <p>{room.description}</p>
            <p>Precio por noche: ${room.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
