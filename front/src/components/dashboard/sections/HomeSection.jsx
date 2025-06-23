import '../../../css/home-section.css'

const HomeSection = () => {
  
  return (
    <div className='section-container'>
      <h2>Bienvenido </h2>
      <p>
        Esta es tu area principal de control dentro del sistema <strong>Tournament Lab</strong>. Desde aquí puedes
        navegar a través de las distintas secciones para gestionar torneos, visualizar información, actualizar tu
        cuenta y más.
      </p>

      <div className='admin-dashboard-preview'>
        <ul>
          <li> Visualiza torneos activos, completados y cancelados </li>
          <li> Crea nuevos torneos rápidamente </li>
          <li> Busca información específica usando filtros  </li>
          <li> Accede a la configuración de tu cuenta </li>
        </ul>

        <div className='admin-image-placeholder'>
          <img src='../assets/img/logo2.png' alt='Adminsitrador Dashboard' style={{maxWidth: '100%', borderRadius: '8px' }}/>
        </div>
      </div>
    </div>
  )
}

export default HomeSection