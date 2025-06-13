// COMPONENTS
import { useState } from "react"
import {
  FaCheckCircle, FaCog, FaPlayCircle, FaPlusCircle, FaQuestionCircle,
  FaSearch, FaSignOutAlt, FaTimesCircle, FaTrophy
} from 'react-icons/fa'
import SearchModal from "../dashboard/SearchModal"
import ItemNavBar from './ItemNavBar'
import ButtonBar from "./ButtonBar"

// CSS
import '../../css/menu.css'

const NavBar = ({ menuOpen, toggleMenu, onSelectSection }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // const toggleSubmenu = () => setIsSubMenuOpen(!isSubMenuOpen)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  
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
            /></li>

            {/* BUSCAR TORNEO */}
            <li>
              <ItemNavBar 
                icon={FaSearch}   
                name="Buscar" 
                onClick={openModal}
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
              link="/configuracion" />
          </li>

          <li>
            {/* CERRAR SESION */}
            <ItemNavBar 
              icon={FaSignOutAlt} 
              name="Cerrar Sesión" 
              link="/logout" />
          </li>
      </ul>

      {/* SEARCH MODAL */}
      <SearchModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default NavBar;  
