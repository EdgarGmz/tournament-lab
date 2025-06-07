import MenuContainer from "../components/menu-container/MenuContainer";
import TournamentList from "../components/tournament-container/TournamentList";

const Dashboard = () => {
    return (
        <div className="d-flex">
            {/* Sidebar izquierdo */}
            <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
                <MenuContainer />
            </div>

            {/* Contenido principal */}
            <TournamentList/>
        </div>
    );
}

export default Dashboard;

