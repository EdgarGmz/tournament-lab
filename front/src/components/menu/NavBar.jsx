// Hooks
import { useState } from "react";

// CSS
import '../../css/menu.css';

// Components
import { FaCheckCircle, FaCog, FaPlayCircle, FaPlusCircle, FaQuestionCircle, FaSearch, FaSignOutAlt, FaTimesCircle, FaTrophy } from 'react-icons/fa';
import ItemNavBar from './ItemNavBar'; // asegúrate de que esté bien la ruta


const NavBar = ({ isOpen }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <div className={`sidenav ${isOpen ? 'active' : ''}`}>
            <img src='../../img/logo2.png' alt="logo" />

            <ul>
                <li onClick={toggleSubmenu}>
                    Torneos {isSubMenuOpen ? '▲' : '▼'}
                </li>
                <ul className={`submenu ${isSubMenuOpen ? 'open' : ''}`}>
                    <li><ItemNavBar icon={FaTrophy} name="Totales" link="/totales" /></li>
                    <li><ItemNavBar icon={FaCheckCircle} name="Completados" link="/completados" /></li>
                    <li><ItemNavBar icon={FaPlayCircle} name="Activos" link="/activos" /></li>
                    <li><ItemNavBar icon={FaTimesCircle} name="Cancelados" link="/cancelados" /></li>
                </ul>
            </ul>

            <span className="line"></span>

            <ul>
                <li><ItemNavBar icon={FaPlusCircle} name="Crear Torneo" link="/crear" /></li>
                <li><ItemNavBar icon={FaSearch} name="Buscar" link="/buscar" /></li>
            </ul>

            <span className="line"></span>

            <ul>
                <li><ItemNavBar icon={FaCog} name="Configuración" link="/configuracion" /></li>
                <li><ItemNavBar icon={FaQuestionCircle} name="Ayuda" link="/ayuda" /></li>
                <li><ItemNavBar icon={FaSignOutAlt} name="Cerrar Sesión" link="/logout" /></li>
            </ul>
        </div>
    )
}
export default NavBar
