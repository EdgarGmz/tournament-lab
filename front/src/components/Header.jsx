    // COMPONENTS
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

    // CSS
    import '../css/header.css';


    const Header = ({toggleMenu, menuOpen}) => {
        return (
            <header className="header">
                <button onClick={toggleMenu} className="menu-btn">
                    {menuOpen ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
                </button>
            </header>
        );
    }

    export default Header;
