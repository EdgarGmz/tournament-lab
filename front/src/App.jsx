import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoardView from './views/DashBoardView'
import LoginView from './views/LoginView'
import RegisterView from './views/RegisterView'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {

  return (    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashBoardView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/home" element={<DashBoardView />} />
        </Routes>
      </BrowserRouter>    
  )
}

export default App
