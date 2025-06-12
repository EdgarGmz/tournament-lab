// HOOKS
import { useState } from "react";

// COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/menu/NavBar";



const Dashboard = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    return (
        <div className="App">
            <Header toggleMenu={toggleMenu} menuOpen ={menuOpen} />
            <NavBar isOpen={menuOpen} />
        </div>
    );
}

export default Dashboard;

