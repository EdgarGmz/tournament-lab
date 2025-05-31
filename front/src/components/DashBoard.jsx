const Dashboard = () => {
    return (
        <div className="d-flex">
            {/* Sidebar izquierdo */}
            <div className="bg-primary text-white p-3 vh-100" style={{ width: '250px' }}>
                <h4>Menú</h4>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Estadísticas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="#">Cuenta</a>
                    </li>
                </ul>
            </div>

            {/* Contenido principal */}
            <div className="flex-grow-1 p-4">
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

