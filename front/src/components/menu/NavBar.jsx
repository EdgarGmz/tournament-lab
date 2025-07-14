// HOOKS
import { useNavigate } from "react-router-dom"

// COMPONENTS
import { navSections } from "../../constants/constanst"
import ButtonBar from "./ButtonBar"
import ItemNavBar from "./ItemNavBar"

// CSS
import "../../css/menu-bar.css"

const NavBar = ({ menuOpen, toggleMenu, onSelectSection }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.section) onSelectSection(item.section)
    else if (item.logout) {
      // Borramos el token del almacenamiento local
      localStorage.removeItem('token')

      // Mostramos una alerta al usuario
      alert('Haz cerrado sesión!')

      navigate('/')
    }
  }
  
  return (
    <div className={`sidenav ${menuOpen ? "" : "collapsed"}`}>
      <div className="menu-header">
        <ButtonBar toggleMenu={ toggleMenu } menuOpen={ menuOpen } />
      </div>
      {navSections.map((section, idx) => (
        <div key={idx}>
          <ul>
            {section.items.map(( item ) => (
              <li key={ item.name }>
                <ItemNavBar
                  icon={ item.icon }
                  name={ item.name }
                  onClick={() => handleItemClick( item )}
                />
              </li>
            ))}
          </ul>
          {idx < navSections.length - 1 && <span className="line"></span>}
        </div>
      ))}
    </div>
  );
};

export default NavBar;