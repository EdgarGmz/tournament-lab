import { Link } from 'react-router-dom';
const Main = () => {
    return (
        <div className= "landing-page" style={{ minHeight: '100vh', backgroundColor: '#1e1e2f', color: "f5f5f5"}}>
            {/* Encabezado */}
            <nav className='navbar navbar-dark px-4 py-3' style ={{ backgroundColor: '#2b2b40' }}>
                <span className='navbar-brand mb-0 h1'>Tournament Lab</span>
                <div>
                    <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
                    <Link to="/register" className="btn btn-outline-light">Register</Link>
                </div>
            </nav>

            {/* Sección principal */}
            <header className='d-flex flex-column justify-content-center align-items-center text-center p-5' style={{ backgroundColor: '#1e1e2f', minHeight: '85vh' }}>
                <h1 className='display-4 fw-bold mb-4' style={{ color: '#ff7b00' }}>Organiza y Vive la Competencia</h1>
                <p className='lead text-light' style={{ maxWidth: '700px' }}>
                    Tournament Lab es la plataforma ideal para jugadores, organizadores y comunidades que buscan
                    llevar sus torneos al siguiente nivel. Desde competencias de TCG's (Magic: The Gathering, Yu-Gi-Oh!, Pokémon)
                    hasta videojuegos, ofrecemos herramientas para crear, gestionar y disfrutar de torneos de manera sencilla y
                    efectiva.
                </p>
                <div className='mt-4'>
                    <Link to="/register" className="btn btn-primary btn-lg me-2">Comienza Ahora</Link>
                    <Link to="/login" className="btn btn-secondary btn-lg">Ya tengo una cuenta</Link>

                </div>
            </header>
        </div>
    );
}

export default Main;
