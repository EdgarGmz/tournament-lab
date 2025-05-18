
const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Bienvenido al panel de control.</p>
            <p>Aquí puedes ver tus estadísticas y gestionar tu cuenta.</p>

            {/* Aquí puedes agregar más componentes o funcionalidades para el dashboard */}
            <div className="dashboard-content">
                <h2>Estadísticas</h2>
                <p>Contenido de estadísticas aquí...</p>
            </div>

            <div className="account-management">
                <h2>Gestión de cuenta</h2>
                <p>Contenido de gestión de cuenta aquí...</p>
            </div>
        </div>
    );
}

export default Dashboard;
