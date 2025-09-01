// HOOKS & COMPONENTS
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Member from '../components/Member';
import Section from '../components/Section';

// ICONS
import { FaBars, FaDocker, FaReact, FaTimes } from 'react-icons/fa';
import { SiDotnet, SiVite } from 'react-icons/si';
import { TbSql } from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";

// Images
import logo from '../img/logo.png';
import logo_ut from '../img/logo_ut.png';
import adrian1 from '../img/members/adrian1.jpg';
import adrian2 from '../img/members/adrian2.jpg';
import aldo1 from '../img/members/aldo1.jpg';
import aldo2 from '../img/members/aldo2.jpg';
import edgar1 from '../img/members/edgar1.jpeg';
import edgar2 from '../img/members/edgar2.jpg';
import grecia2 from '../img/members/grecia1.jpg';
import grecia1 from '../img/members/grecia2.jpg';
import helen1 from '../img/members/helen1.jpg';
import helen2 from '../img/members/helen2.jpg';


const navItems = [
  { href: '#proyecto', label: 'Nuestro Proyecto' },
  { href: '#para-que-es', label: '¿Para qué es?' },
  { href: '#como-utilizarlo', label: '¿Cómo utilizarlo?' },
  { href: '#ventajas', label: 'Ventajas' },
  { href: '#quienes-somos', label: '¿Quiénes somos?' },
  { href: '#escuela', label: 'Nuestra Escuela' },
];

const technologies = [
  { label: 'Frontend', value: 'React', icon: <FaReact />, extra: 'con Vite', extraIcon: <SiVite /> },
  { label: 'Backend', value: 'API RESTful con .NET y C#', icon: <SiDotnet /> },
  { label: 'Base de Datos', value: 'SQL Server', icon: <TbSql /> },
  { label: 'DevOps', value: 'Azure DevOps', icon: <VscAzureDevops /> },
  { label: 'Contenedor', value: 'Docker (solo en el backend)', icon: <FaDocker /> }
];

const methodologies = [
  'Arquitectura Limpia',
  'Principios SOLID',
  'KISS',
  'YAGNI',
  'GitFlow',
];

const steps = [
  {
    title: '1. Registro de Inicio:',
    desc: 'Crea una cuenta como organizador o inicia sesión si ya tienes una. Esto te permitirá acceder a todas las funcionalidades de la plataforma.'
  },
  {
    title: '2. Crear un torneo:',
    desc: 'Dirígete a la sección Crear Torneo donde podrás definir el nombre, la fecha de inicio, el tipo de torneo y otros detalles como el número de participantes.'
  },
  {
    title: '3. Registro de Participantes:',
    desc: 'Añade a los jugadores o equipos que participarán en el torneo. Puedes hacerlo manualmente o desde una lista precargada.'
  },
  {
    title: '4. Gestión del torneo:',
    desc: 'Marca a los ganadores de cada enfrentamiento con un clic. El sistema actualizará automáticamente los cruces y avanzará a los ganadores a la siguiente ronda.'
  },
  {
    title: '5. Consultar estadísticas:',
    desc: 'Accede al panel principal para ver un resumen visual de los torneos activos, completados o cancelados, así como el historial de competencias.'
  }
];

const members = [
  { name: "Helen Estefania", role: "Scrum Master", img1: helen1, img2: helen2 },
  { name: "Grecia González", role: "Analista de Negocios", img1: grecia1, img2: grecia2 },
  { name: "Aldo Chávez", role: "Diseñador UX/UI", img1: aldo1, img2: aldo2 },
  { name: "Adrián Fuentes", role: "Tester/QA", img1: adrian1, img2: adrian2 },
  { name: "Edgar Gómez", role: "Desarrollador", img1: edgar1, img2: edgar2 },
];

const advantages = [
  'Fácil de usar',
  'Adaptado a torneos presenciales o en línea',
  'Seguimiento de resultados y estadísticas',
  'Interfaz moderna y responsiva',
  'Gestión automatizada de rondas y enfrentamientos',
  'Registro rápido de participantes',
  'Visualización clara del avance del torneo',
  'Historial de torneos y resultados',
  'Accesible desde cualquier dispositivo',
  'Soporte para diferentes tipos de torneos',  
  'Seguridad en el manejo de datos'
];

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuLinkClick = () => setIsMenuOpen(false);

  return (
      <div>
        {/* NAVBAR */}
        <nav className="navbar">
          <div className="nav-container">
            <div className='nav-logo'>
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="nav-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
              {navItems.map(item => (
                <li key={item.href}>
                  <a href={item.href} onClick={handleMenuLinkClick}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="nav-auth">
              <Link to="/login" className="btn-link login">Login</Link>
              <Link to="/register" className="btn-link register">Registrarse</Link>
            </div>
          </div>
        </nav>

        <main className="landing">
          {/* Qué es Tournament Lab */}
          <Section id="proyecto">
            <h1>Sobre nuestro Proyecto</h1>
            <p>
              <strong>Tournament Lab</strong> nació como un proyecto académico en la <strong>Universidad Tecnológica Santa Catarina </strong>
              con el propósito de aplicar conocimientos en desarrollo de software para crear una solución funcional para la gestión de torneos.
            </p>
            <div className='info-tecnologies'>
              <div className='info-tecnologies-text'>
                <h3>Tecnologías utilizadas</h3>
                <ul>
                  {technologies.map((tech, i) => (
                    <li key={i}>
                      <strong>{tech.label} :</strong> {tech.value} {tech.icon} {tech.extra && <> {tech.extra} {tech.extraIcon}</>}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='info-tecnologies-methodologies'>
                <h3>Metodologías y Principios</h3>
                <p>El desarrollo se guió por prácticas clave como:</p>
                <ul>
                  {methodologies.map((m, i) => (
                    <li key={i}><strong>{m}</strong></li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          {/* ¿Para qué es? */}
          <Section id="para-que-es" title="¿Para qué es Tournament Lab?" image={logo} imageAlt="Torneo" imageClass="copa">
            <p>
              El proyecto <strong>Tournament Lab </strong>tiene como función general ofrecer una
              plataforma digital para la gestión de torneos académicos, recreativos o competitivos,
              permitiendo a los usuarios registrar, organizar, visualizar y administrar competencias
              de manera eficiente. Permite a los organizadores crear torneos, registrar participantes,
              definir rondas, controlar el avance de los enfrentamientos y consultar estadísticas de
              forma clara e intuitiva. Además, busca mejorar la experiencia del usuario a través de una
              interfaz moderna, responsiva y accesible, integrando buenas prácticas de desarrollo,
              arquitectura y diseño UX/UI.
            </p>
          </Section>

          {/* ¿Cómo utilizarlo? */}
          <Section id="como-utilizarlo" title="¿Cómo utilizarlo?" alt>
            <p>Esta diseñado para ser intuitivo y fácil de usar. A continuacion te explicamos
              los pasos básicos para comenzar a gestionar tus torneos dentro de la plataforma:</p>
            <ol>
              {steps.map((step, i) => (
                <li key={i}>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* Ventajas */}
          <Section id="ventajas" title="Ventajas" className="text-center">
            <ol type='A'>
              {advantages.map((adv, i) => (
                <li key={i}>{adv}</li>
              ))}
            </ol>
          </Section>

          <Section id="quienes-somos" title="¿Quiénes somos?" alt>
            <p>
              Este proyecto fue desarrollado por un equipo de estudiantes apasionados por la tecnología y los juegos.
            </p>
            <div className='members'>
              {members.map((m) => (
                <Member key={m.name} {...m} />
              ))}
            </div>
          </Section>

          {/* Escuela */}
          <Section id="escuela" title="¿De qué escuela somos?" center>
            <p>
              Universidad Tecnológica Santa Catarina – Ingeniería y Gestión de Desarrollo de Software.
            </p>
            <img src={logo_ut} alt="Logo Escuela" className="loguito" width="400" height="300" />
          </Section>


        </main>

        <Footer />
      </div>
  );
};

export default LandingPage;
