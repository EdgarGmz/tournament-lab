import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

const ButtonBar = ({toggleMenu, menuOpen})=>{
    return (
        <button onClick={toggleMenu} className="menu-btn">
                {menuOpen ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
        </button>
    )
}

export default ButtonBar