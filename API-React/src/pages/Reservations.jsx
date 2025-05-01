import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      try {
        const { data } = await api.get('/reservations');
        setReservations(data.reservations);
        setError('');
      } catch (err) {
        if (err.response?.status === 404) {
          setError('No tienes reservas actualmente.');
        } else if (err.response?.status === 401) {
          setError('No estás autenticado.');
        } else {
          setError('Error al obtener tus reservas.');
        }
        setReservations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("¿Seguro que quieres cancelar esta reserva?")) return;
  
    try {
      await api.delete(`/reservations/${id}`);
      setReservations(prev => prev.filter(r => r.id !== id));
    } catch (err) {
      alert('Error al cancelar la reserva.');
    }
  };
  
  const downloadInvoice = async (reservationId) => {
    try {
      const response = await api.get(`/reservations/${reservationId}/invoices`, {
        responseType: 'blob', // 👈 necesario para descargar PDF
      });
  
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
  
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `factura_reserva_${reservationId}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
  
      window.URL.revokeObjectURL(url); // buena práctica: liberar la URL
    } catch (error) {
      console.error('Error al descargar la factura:', error);
      alert('No se pudo generar la factura.');
    }
  };
  

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Mis Reservas</h2>

      {loading && <p>Cargando reservas...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul>
        {reservations.map((reserva) => (
          <li key={reserva.id} style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '10px' }}>
            <p><strong>Número de reserva:</strong> {reserva.id}</p>
            <p><strong>Hotel:</strong> {reserva.hotel_name}</p>
            <p><strong>Habitación:</strong> {reserva.room_type}</p>
            <p><strong>Desde:</strong> {reserva.check_in}</p>
            <p><strong>Hasta:</strong> {reserva.check_out}</p>
            <p><strong>Precio</strong> {reserva.price}</p>
            <button onClick={() => navigate(`/reservations/${reserva.id}/edit`, {
        state: { ...reserva,
            hotel_id: reserva.hotel_id,
         }
            })}>
            Modificar
        </button>
        <button onClick={() => handleDelete(reserva.id)}>
        Cancelar
            </button>
            <button onClick={() => downloadInvoice(reserva.id)}>
                 Crear factura
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
