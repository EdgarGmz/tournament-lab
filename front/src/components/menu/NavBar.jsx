// HOOKS
import { useNavigate } from "react-router-dom";

// COMPONENTS
import { FcCancel, FcExport, FcIdea, FcManager, FcOk, FcPlus, FcSettings } from "react-icons/fc";
import { TfiCup } from "react-icons/tfi";
import ButtonBar from "./ButtonBar";
import ItemNavBar from "./ItemNavBar";


// CSS
import "../../css/menu-bar.css";

const navSections = [
  {
    items: [
      {
        icon: FcManager,
        name: "Inicio",
        section: "inicio",
      },
      {
        icon: FcPlus,
        name: "Crear Torneo",
        section: "crear",
      },
    ],
  },
  {
    items: [
      {
        icon: TfiCup,
        name: "Totales",
        section: "totales",
      },
      {
        icon: FcOk,
        name: "Completados",
        section: "completados",
      },
      {
        icon: FcIdea,
        name: "Activos",
        section: "activos",
      },
      {
        icon: FcCancel,
        name: "Cancelados",
        section: "cancelados",
      },
    ],
  },
  {
    items: [
      {
        icon: FcSettings,
        name: "Configuración",
        section: "configuracion",
      },
      {
        icon: FcExport,
        name: "Cerrar Sesión",
        logout: true,
      },
    ],
  },
];

const NavBar = ({ menuOpen, toggleMenu, onSelectSection }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (item.section) onSelectSection(item.section)
    else if(item.logout) navigate("/")
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