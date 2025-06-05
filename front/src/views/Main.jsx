import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="bg-dark text-warning">

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary px-4">
        <div className="container-fluid">
          <span className="navbar-brand">Tournament Lab</span>

          {/* Nav Items */}
          <ul className='navbar-nav ms-auto'>
              <li className="nav-item">
                <a href='#para-que-es' className="nav-link text-white">¿Para que es?</a>
              </li>
              <li className="nav-item">
                <a href='#como-utilizarlo' className="nav-link text-white">¿Cómo utilizarlo?</a>
              </li>
              <li className="nav-item">
                <a href='#ventajas' className="nav-link text-white">Ventajas</a>
              </li>
              <li className="nav-item">
                <a href='#quienes-somos' className="nav-link text-white">¿Quiénes somos?</a>
              </li>
              <li className="nav-item">
                <a href='#escuela' className="nav-link text-white">Nuestra Escuela</a>
              </li>
          </ul>

          <span className='navbar-brand'>       |       </span>
          
          <div>
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/register" className="btn btn-light">Registrarse</Link>
          </div>
          <div>
            
          </div>
        </div>
      </nav>

      {/* CAROUSEL */}
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/carrusel1.jpg" className="d-block w-100" alt="Torneo 1" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src="/img/carrusel2.jpg" className="d-block w-100" alt="Torneo 2" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
          <div className="carousel-item">
            <img src="/img/carrusel3.jpg" className="d-block w-100" alt="Torneo 3" style={{ height: '500px', objectFit: 'cover' }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* SECCIONES */}
      <section id="para-que-es" className="container py-5">
        <h2 className="text-center text-warning mb-4">¿Para qué es Tournament Lab?</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              Es una plataforma para organizar y participar en torneos de forma sencilla, pensada para juegos como Magic, Yu-Gi-Oh!, Pokémon, y videojuegos.
            </p>
          </div>
          <div className="col-md-6">
            <img src="/img/torneo.jpg" className="img-fluid rounded shadow" alt="Torneo" />
          </div>
        </div>
      </section>

      <section id="como-utilizarlo" className="container py-5 bg-secondary text-white rounded">
        <h2 className="text-center text-light mb-4">¿Cómo utilizarlo?</h2>
        <p className="text-center">
          Regístrate, crea o únete a un torneo, y gestiona todo desde tu panel. Ideal para organizadores, jugadores o comunidades.
        </p>
      </section>

      <section id="ventajas" className="container py-5">
        <h2 className="text-center text-info mb-4">Ventajas</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-white">✅ Fácil de usar</li>
          <li className="list-group-item bg-dark text-white">✅ Adaptado a torneos presenciales o en línea</li>
          <li className="list-group-item bg-dark text-white">✅ Seguimiento de resultados y estadísticas</li>
        </ul>
      </section>

      <section id="quienes-somos" className="container py-5">
        <h2 className="text-center text-success mb-4">¿Quiénes somos?</h2>
        <p className="text-center">Este proyecto fue desarrollado por un equipo de estudiantes apasionados por la tecnología y los juegos.</p>
        <div className="text-center">
          <img src="/img/equipo.jpg" className="img-fluid rounded-circle shadow" alt="Equipo" style={{ maxWidth: '200px' }} />
        </div>
      </section>

      <section id="escuela" className="container py-5 bg-secondary text-white rounded">
        <h2 className="text-center text-light mb-4">¿De qué escuela somos?</h2>
        <p className="text-center">Universidad Tecnológica Santa Catarina - Ingeniería y Gestión de Desarrollo de Software.</p>
        <div className="text-center">
          <img src="/img/logo-escuela.png" alt="Logo Escuela" style={{ maxWidth: '150px' }} />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
