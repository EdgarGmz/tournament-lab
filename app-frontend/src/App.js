import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardView from './views/DashboardView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/register" element={<RegisterView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;