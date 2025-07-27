import { FaArrowCircleLeft } from "react-icons/fa";

const ButtonBar = ({ toggleMenu, menuOpen }) => {
  return (
    <button onClick={toggleMenu} className="menu-btn">
      <FaArrowCircleLeft
        color="white"
        className={`menu-icon ${!menuOpen ? "collapsed" : ""}`}
      />
    </button>
  );
};

export default ButtonBar;
