import MenuContainer from "../components/menu/MenuContainer";
const Dashboard = () => {
    return (
        <div className="d-flex">
            {/* Sidebar izquierdo */}
            <div className="bg-light border-end" style={{ width: '250px', minHeight: '100vh' }}>
                <MenuContainer />
            </div>

            {/* Contenido principal */}
            <div className="flex-grow-1 p-4 text-light bg-dark">
                <h1>Dashboard</h1>
                <p>Bienvenido al panel de control.</p>
                <p>Aquí puedes ver tus estadísticas y gestionar tu cuenta.</p>

                <div className="dashboard-content mt-4">
                    <h2>Estadísticas</h2>
                    <p>Contenido de estadísticas aquí...</p>
                </div>

                <div className="account-management mt-4">
                    <h2>Gestión de cuenta</h2>
                    <p>Contenido de gestión de cuenta aquí...</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

