// VIEWS
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoard from './views/DashBoard';
import Login from './views/Login';
import LandingPage from './views/LandingPage';
import Register from './views/Register';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<DashBoard/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
