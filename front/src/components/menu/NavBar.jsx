import { useState } from "react";
import {
  FaCheckCircle, FaCog, FaPlayCircle, FaPlusCircle, FaQuestionCircle,
  FaSearch, FaSignOutAlt, FaTimesCircle, FaTrophy
} from 'react-icons/fa';

import ItemNavBar from './ItemNavBar';
import ButtonBar from "./ButtonBar";
import '../../css/menu.css'

const NavBar = ({ menuOpen, toggleMenu, onSelectSection }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubmenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <div className={`sidenav ${menuOpen ? '' : 'collapsed'}`}>
      <div className="menu-header">
        {/* Botón menú */}
        <ButtonBar toggleMenu={toggleMenu} menuOpen={menuOpen} />

        {/* LOGO */}
        {/* {menuOpen && <img src='../../img/logo2.png' alt="logo" />} */}
      </div>

        <ul>
            <li><ItemNavBar 
            icon={FaPlusCircle} 
            name="Crear Torneo" 
            /></li>

            <li><ItemNavBar 
            icon={FaSearch} 
            name="Buscar" 
             /></li>
        </ul>

        <span className="line"></span>
        {/* SUB MENU */}
        <ul>
            <li onClick={toggleSubmenu} className="item-navbar">
                <FaTrophy size={20} />
                <span className="item-label">Torneos {isSubMenuOpen ? '▲' : '▼'}</span>
            </li>

            {isSubMenuOpen && (
            <ul className={`submenu ${isSubMenuOpen ? 'open': ''}`}>
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
            )}
      </ul>


      <span className="line"></span>

        <ul>
            <li><ItemNavBar 
            icon={FaCog} 
            name="Configuración" 
            link="/configuracion" /></li>

            <li><ItemNavBar 
            icon={FaQuestionCircle} 
            name="Ayuda" 
            link="/ayuda" /></li>

            <li><ItemNavBar 
            icon={FaSignOutAlt} 
            name="Cerrar Sesión" 
            link="/logout" /></li>
        </ul>
    </div>
  );
};

export default NavBar;  
