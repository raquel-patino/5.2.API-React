import { useEffect, useState } from 'react';
import api from '../api/axios';
import { useAuth } from '../context/AuthContext';

const AdminUsers = () => {
  const { user } = useAuth(); // para saber si es el usuario actual
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get('/admin/users');
        setUsers(data.users.data); // si usas Laravel's paginate()
      } catch (err) {
        setError('No se pudieron cargar los usuarios.');
      }
    };

    fetchUsers();
  }, []);

  const handleRoleChange = async (userId, newRole) => {
    try {
      const { data } = await api.patch(`/admin/users/${userId}/role`, {
        user_type: newRole
      });

      setUsers(prev =>
        prev.map(u => u.id === userId ? { ...u, user_type: newRole } : u)
      );
      setSuccess(data.message);
      setError('');
    } catch (err) {
      const msg = err.response?.data?.error || 'Error al actualizar el rol.';
      setError(msg);
      setSuccess('');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Gestión de Usuarios</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol actual</th>
            <th>Cambiar a</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.user_type}</td>
              <td>
                {u.id === user.id ? (
                  <em>(No puedes cambiar tu propio rol)</em>
                ) : (
                  <>
                    <select
                      defaultValue={u.user_type}
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                    >
                      <option value="client">client</option>
                      <option value="admin">admin</option>
                    </select>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsers;
