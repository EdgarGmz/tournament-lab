// Bootstrap
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashBoardView from './views/DashBoardView';
import LoginView from './views/LoginView';
import Main from './views/Main';
import RegisterView from './views/RegisterView';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/dashboard" element={<DashBoardView />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
