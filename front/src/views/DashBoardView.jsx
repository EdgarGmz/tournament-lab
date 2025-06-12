// HOOKS
import { useState } from "react";

// COMPONENTS
import NavBar from "../components/menu/NavBar";
import Container from "../components/dashboard/Container";

// CSS
import '../css/dashboard.css'

const Dashboard = () => {

    const [menuOpen, setMenuOpen] = useState(true)
    const [ activeSection, setActiveSection ] = useState("totales")

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const getTitle = (section) => {
        switch(section){
            case "totales" : return "Torneos Totales";
            case "completados" : return "Torneos Completados";
            case "activos" : return "Torneos Activos";
            case "cancelados" : return "Torneos Cancelados";
            default: return "DashBoard"
        }
    }

    const renderSection = (section) => {
        switch(section){
            case "totales" : return <p>Aqui va el contenido de torneos totales</p>;
            case "completados" : return <p>Aqui va el contenido de torneos completados</p>;
            case "activos" : return <p>Aqui va el contenido de torneos activos</p>;
            case "cancelados" : return <p>Aqui va el contenido de torneos cancelados</p>;
            default: return <p>Panel de control</p>
        }
    }       

    return (
        <div className="dashboard">     
            {/* NAVBAR */}
            <NavBar 
            isOpen={menuOpen} 
            toggleMenu={toggleMenu} 
            menuOpen={menuOpen}
            onSelectSection = {setActiveSection} />

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

