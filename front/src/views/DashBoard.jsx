// HOOKS
import { useState } from "react"

// COMPONENTS
import NavBar from "../components/menu/NavBar"
import Container from "../components/dashboard/Container"

// CSS
import '../css/dashboard.css'

// LOGIC
import {getTitle, renderSection} from '../logic/Logic'

const Dashboard = () => {
    const [ menuOpen, setMenuOpen ] = useState(true)
    const [ activeSection, setActiveSection ] = useState("totales")

    const toggleMenu = () => setMenuOpen(!menuOpen)
    
    return (
        <div className="dashboard">     
            {/* NAVBAR */}
            <NavBar 
                isOpen={menuOpen} 
                toggleMenu={toggleMenu} 
                menuOpen={menuOpen}
                onSelectSection = {setActiveSection} 
            />
            
            {/* CONTAINER */}
            <Container 
                title={getTitle(activeSection)}
                isMenuCollapsed = {!menuOpen}
            >
                {renderSection(activeSection)}
            </Container>            
        </div>
    );
}

export default Dashboard;

