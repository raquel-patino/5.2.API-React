import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Home from './pages/Home';
import Hotels from './pages/Hotels';
import Login from './pages/Login';
import Register from './pages/Register';
import Rooms from './pages/Rooms';
import Reservations from './pages/Reservations';
import CreateReservation from './pages/CreateReservation';
import EditReservations from './pages/EditReservations';
import AdminUsers from './pages/AdminUsers';
import Navbar from './components/NavBar';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hotels/:id/rooms" element={<Rooms />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservar" element={<CreateReservation />} />
          <Route path="/reservations/:id/edit" element={<EditReservations />} />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;


