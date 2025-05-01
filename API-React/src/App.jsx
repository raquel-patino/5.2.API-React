import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';
import Hotels from './pages/Hotels';
import Rooms from './pages/Rooms';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import CreateReservation from './pages/CreateReservation';
import EditReservation from './pages/EditReservations'; 

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/hotels/:id/rooms" element={<Rooms />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/reservar" element={<CreateReservation />} />
          <Route path="/reservations/:id/edit" element={<EditReservation />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

