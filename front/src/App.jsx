// VIEWS
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './auth/ProtectedRoute';
import DashBoard from './views/DashBoard';
import LandingPage from './views/LandingPage';
import Login from './views/Login';
import Register from './views/Register';
import TournamentDetail from './views/TournamentDetail';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={<Register />} />
        
        {/* Rutas privadas */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={ <DashBoard/> } />
          <Route path="/tournament/:id" element={<TournamentDetail />} />
          {/* Si hay más rutas que necesiten protección, hay que añadirlas aqui */}
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
