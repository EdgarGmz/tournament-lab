
// COMPONENTS
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// CSS
import '../css/landing-page.css'

const LandingPage = () => {
  return (
    <div>

      {/* NAVBAR */}
      <nav>
        <div>
          <span>Tournament Lab</span>

          {/* Nav Items */}
          <ul>
              <li>
                <a href='#para-que-es'>¿Para que es?</a>
              </li>
              <li>
                <a href='#como-utilizarlo'>¿Cómo utilizarlo?</a>
              </li>
              <li>
                <a href='#ventajas'>Ventajas</a>
              </li>
              <li>
                <a href='#quienes-somos'>¿Quiénes somos?</a>
              </li>
              <li>
                <a href='#escuela'>Nuestra Escuela</a>
              </li>
          </ul>

          {/* INCIO DE SESION / REGISTRARSE */}
          <div>
            <Link to="/login">Login</Link>
            <Link to="/register">Registrarse</Link>
          </div>
          <div>
            
          </div>
        </div>
      </nav>

      {/* CAROUSEL */}
      // TODO: Implementar un carrousell

      {/* PARA QUE ES */}
      <section id="para-que-es">
        <h2>¿Para qué es Tournament Lab?</h2>
        <div>
          <div>
            <p>
              Es una plataforma para organizar y participar en torneos de forma sencilla, pensada para juegos como Magic, Yu-Gi-Oh!, Pokémon, y videojuegos.
            </p>
          </div>
          <div>
            <img src="/img/torneo.jpg" alt="Torneo" />
          </div>
        </div>
      </section>

      {/* COMO UTILIZARLO */}
      <section id="como-utilizarlo">
        <h2>¿Cómo utilizarlo?</h2>
        <p>
          Regístrate, crea o únete a un torneo, y gestiona todo desde tu panel. Ideal para organizadores, jugadores o comunidades.
        </p>
      </section>

      {/* VENTAJAS */}
      <section id="ventajas">
        <h2>Ventajas</h2>
        <ul>
          <li>✅ Fácil de usar</li>
          <li>✅ Adaptado a torneos presenciales o en línea</li>
          <li>✅ Seguimiento de resultados y estadísticas</li>
        </ul>
      </section>

      {/* QUIENES SOMOS */}
      <section id="quienes-somos">
        <h2 >¿Quiénes somos?</h2>
        <p >Este proyecto fue desarrollado por un equipo de estudiantes apasionados por la tecnología y los juegos.</p>
        <div >
          <img src="/img/equipo.jpg"  alt="Equipo" />
        </div>
      </section>

      {/* ESCUELA */}
      <section id="escuela">
        <h2 >¿De qué escuela somos?</h2>
        <p >Universidad Tecnológica Santa Catarina - Ingeniería y Gestión de Desarrollo de Software.</p>
        <div>
          <img src="/img/logo-escuela.png" alt="Logo Escuela" style={{ maxWidth: '150px' }} />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
