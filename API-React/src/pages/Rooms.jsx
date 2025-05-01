import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Rooms = () => {
  const { id } = useParams(); // hotelId
  const { state } = useLocation(); // { check_in, check_out, hotel_name }
  const navigate = useNavigate();

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
      <h2>Habitaciones disponibles en {state.hotel_name}</h2>
      {loading && <p>Cargando habitaciones...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && rooms.length === 0 && !error && <p>No hay habitaciones disponibles.</p>}

      <ul>
        {rooms.map(room => (
          <li key={room.id}>
            <h4>{room.type}</h4>
            <p>{room.description}</p>
            <p>Precio por noche: ${room.price}</p>
            <button
              onClick={() => navigate('/reservar', {
                state: {
                  hotel_id: id,
                  hotel_name: state.hotel_name,
                  room_id: room.id,
                  room_name: room.type,
                  check_in: state.check_in,
                  check_out: state.check_out,
                },
              })}
            >
              Reservar esta habitación
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rooms;
