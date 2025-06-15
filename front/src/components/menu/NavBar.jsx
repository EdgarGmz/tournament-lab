// COMPONENTS
import { useState } from "react"
import {
  FaCheckCircle, FaCog, FaPlayCircle, FaPlusCircle, FaQuestionCircle,
  FaSearch, FaSignOutAlt, FaTimesCircle, FaTrophy
} from 'react-icons/fa'
import ItemNavBar from './ItemNavBar'
import ButtonBar from "./ButtonBar"
import { useNavigate } from "react-router-dom"

// Pantallas Modales
import SearchModal from "../dashboard/modal/SearchModal"
import CreateModal from "../dashboard/modal/CreateModal"
import SettingsModal from "../dashboard/modal/SettingsModal"

// CSS
import '../../css/menu-bar.css'

const NavBar = ({ menuOpen, toggleMenu, onSelectSection }) => {
  // Modales
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)  
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)  
  
  const openSearchModal = () => setIsSearchModalOpen(true)
  const closeSearchModal = () => setIsSearchModalOpen(false)

  const openCreateModal = () => setIsCreateModalOpen(true)
  const closeCreateModal = () => setIsCreateModalOpen(false)

  const openSettingsModal = () => setIsSettingsModalOpen(true)
  const closeSettingsModal = () => setIsSettingsModalOpen(false)

  // Navigation
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/')
  }
  
  return (

    <div className={`sidenav ${menuOpen ? '' : 'collapsed'}`}>
      <div className="menu-header">
        {/* Botón menú */}
        <ButtonBar toggleMenu={toggleMenu} menuOpen={menuOpen} />
      
      </div>

        <ul>

            {/* CREAR TORNEO */}
            <li>
              <ItemNavBar 
                icon={FaPlusCircle} 
                name="Crear Torneo" 
                onClick={openCreateModal}
            /></li>

            {/* BUSCAR TORNEO */}
            <li>
              <ItemNavBar 
                icon={FaSearch}   
                name="Buscar" 
                onClick={openSearchModal}
             /></li>
        </ul>

        <span className="line"></span>

        <ul>
          <ItemNavBar 
              icon={FaTrophy} 
              name="Totales" 
              onClick={() => onSelectSection("totales")}
          />

          {/* COMPLETADOS */}
          <ItemNavBar 
              icon={FaCheckCircle} 
              name="Completados" 
              onClick={() => onSelectSection("completados")}
          />

          {/* ACTIVOS */}
          <ItemNavBar 
              icon={FaPlayCircle} 
              name="Activos" 
              onClick={() => onSelectSection("activos")}
            />

          {/* CANCELADOS */}
          <ItemNavBar 
              icon={FaTimesCircle} 
              name="Cancelados" 
              onClick={() => onSelectSection("cancelados")}
          />
      </ul>


      <span className="line"></span>

      <ul>
          {/* CONFIGURACIÓN */}
          <li>
            <ItemNavBar 
              icon={FaCog} 
              name="Configuración"              
              onClick={openSettingsModal}/>
          </li>

          <li>
            {/* CERRAR SESION */}
            <ItemNavBar 
              icon={FaSignOutAlt} 
              name="Cerrar Sesión" 
              onClick= {handleLogout}/>
          </li>
      </ul>

      {/* CLOSE MODAL */}
      <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal}/>
      <CreateModal isOpen={isCreateModalOpen} onClose={closeCreateModal}/>
      <SettingsModal isOpen={isSettingsModalOpen} onClose={closeSettingsModal}/>
    </div>
  );
};

export default NavBar;  
