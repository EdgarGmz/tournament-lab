
// COMPONENTS
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Squad from '../img/squad.png';
import img1 from '../img/img1.png';
import logo from '../img/Logo_ut.png';

// CSS
import '../css/landing-page.css'

const LandingPage = () => {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <span className="logo">Tournament Lab</span>

          <ul className="nav-menu">
            <li><a href="#para-que-es">¿Para qué es?</a></li>
            <li><a href="#como-utilizarlo">¿Cómo utilizarlo?</a></li>
            <li><a href="#ventajas">Ventajas</a></li>
            <li><a href="#quienes-somos">¿Quiénes somos?</a></li>
            <li><a href="#escuela">Nuestra Escuela</a></li>
          </ul>

          <div className="nav-auth">
            <Link to="/login" className="btn-link login">Login</Link>
            <Link to="/register" className="btn-link register">Registrarse</Link>
          </div>
        </div>
      </nav>

      {/* CAROUSEL */}
      // TODO: Implementar un carrousell

      <main className="landing">

      {/* Para qué es */}
      <section id="para-que-es" className="section">
        <div className="container">
          <div className="text">
            <h2>¿Para qué es Tournament Lab?</h2>
            <p>
              Es una plataforma para organizar y participar en torneos de forma sencilla,
              pensada para juegos como Magic, Yu-Gi-Oh!, Pokémon y videojuegos.
            </p>
          </div>
          <div className="image">
            <img src={img1} alt="Torneo" class="copa" />
          </div>
        </div>
      </section>

      {/* Cómo utilizarlo */}
      <section id="como-utilizarlo" className="section section-alt">
        <div className="container single">
          <div className="text">
            <h2>¿Cómo utilizarlo?</h2>
            <p>
              Regístrate, crea o únete a un torneo, y gestiona todo desde tu panel.
              Ideal para organizadores, jugadores o comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section id="ventajas" className="section">
        <div className="container single">
          <div className="text">
            <h2>Ventajas</h2>
            <ul>
              <li>Fácil de usar</li>
              <li>Adaptado a torneos presenciales o en línea</li>
              <li>Seguimiento de resultados y estadísticas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section id="quienes-somos" className="section section-alt">
        <div className="container">
          <div className="image">
            <img src={Squad} alt="Equipo" />
          </div>
          <div className="text">
            <h2>¿Quiénes somos?</h2>
            <p>
              Este proyecto fue desarrollado por un equipo de estudiantes apasionados
              por la tecnología y los juegos.
            </p>
          </div>
        </div>
      </section>

      {/* Escuela */}
      <section id="escuela" className="section">
        <div className="container single center">
          <div className="text">
            <h2>¿De qué escuela somos?</h2>
            <p>
              Universidad Tecnológica Santa Catarina –
              Ingeniería y Gestión de Desarrollo de Software.
            </p>
            <img src={logo} alt="Logo Escuela" class="loguito" className="logo-escuela" width="400" height="300" />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="cta" className="section section-alt cta">
        <div className="container single center">
          <h2>¿Listo para crear tu primer torneo?</h2>
          <p>Únete gratis y lleva tus competencias al siguiente nivel.</p>
          <Link to="/register" className="btn-primary">Regístrate ahora</Link>
        </div>
      </section>

    </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
