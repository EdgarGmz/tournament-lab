// HOOKS
import { useState } from "react";

// COMPONENTS
import Container from "../components/menu/Container";
import NavBar from "../components/menu/NavBar";
import { getTitle, renderSection } from '../logic/Logic';

const Dashboard = () => {
    const [menuOpen, setMenuOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("inicio");

    return (
        <div className="dashboard">
            <NavBar
                isOpen={menuOpen}
                toggleMenu={() => setMenuOpen(open => !open)}
                menuOpen={menuOpen}
                onSelectSection={setActiveSection}
            />
            <Container
                title={getTitle(activeSection)}
                isMenuCollapsed={!menuOpen}
            >
                {renderSection(activeSection, setActiveSection)}
            </Container>
        </div>
    );
};

export default Dashboard;
