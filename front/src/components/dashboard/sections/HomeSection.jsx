import '../../../css/home-section.css'

const HomeSection = () => {
  
  // Simulación de datos de torneos
  const torneos = [
    { id: 1, nombre: "Torneo Primavera", estado: "completado", fechaCreacion: "2024-04-10" },
    { id: 2, nombre: "Torneo Verano", estado: "activo", fechaCreacion: "2024-05-15" },
    { id: 3, nombre: "Torneo Otoño", estado: "cancelado", fechaCreacion: "2024-06-01" },
    { id: 4, nombre: "Torneo Invierno", estado: "activo", fechaCreacion: "2024-06-10" },
  ];

  // Cálculos generales
  const total = torneos.length;
  const completados = torneos.filter(t => t.estado === "completado").length;
  const activos = torneos.filter(t => t.estado === "activo").length;
  const cancelados = torneos.filter(t => t.estado === "cancelado").length;

  const pctCompletados = ((completados / total) * 100).toFixed(0);
  const pctActivos = ((activos / total) * 100).toFixed(0);
  const pctCancelados = ((cancelados / total) * 100).toFixed(0);

  // Último torneo creado
  const ultimoTorneo = torneos.reduce((a, b) => new Date(a.fechaCreacion) > new Date(b.fechaCreacion) ? a : b);

  return (
    <div className='section-container'>
      <h2>Resumen general de torneos</h2>
      <div className="dashboard-stats">
        <div className="stat-card">
          <strong>Total torneos:</strong> {total}
        </div>
        <div className="stat-card">
          <strong>Completados:</strong> {completados} ({pctCompletados}%)
        </div>
        <div className="stat-card">
          <strong>Activos:</strong> {activos} ({pctActivos}%)
        </div>
        <div className="stat-card">
          <strong>Cancelados:</strong> {cancelados} ({pctCancelados}%)
        </div>
        <div className="stat-card">
          <strong>Último torneo creado:</strong> {ultimoTorneo.nombre} ({ultimoTorneo.fechaCreacion})
        </div>
      </div>

      <p>
        Esta es tu area principal de control dentro del sistema <strong>Tournament Lab</strong>. Desde aquí puedes
        navegar a través de las distintas secciones para gestionar torneos, visualizar información, actualizar tu
        cuenta y más.
      </p>

      <div className='admin-dashboard-preview'>
        <ul>
          <li>
            <span role="img" aria-label="ojo" style={{marginRight: 8}}>👁️</span>
            Visualiza torneos activos, completados y cancelados
          </li>
          <li>
            <span role="img" aria-label="nuevo" style={{marginRight: 8}}>➕</span>
            Crea nuevos torneos rápidamente
          </li>
          <li>
            <span role="img" aria-label="lupa" style={{marginRight: 8}}>🔍</span>
            Busca información específica usando filtros
          </li>
          <li>
            <span role="img" aria-label="configuración" style={{marginRight: 8}}>⚙️</span>
            Accede a la configuración de tu cuenta
          </li>
        </ul>

        <div className='admin-image-placeholder'>
          <img src='../assets/img/logo2.png' alt='Administrador Dashboard' style={{maxWidth: '100%', borderRadius: '8px' }}/>
        </div>
      </div>
    </div>
  )
}

export default HomeSection