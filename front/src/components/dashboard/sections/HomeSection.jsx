import { useEffect, useState } from "react";
import '../../../css/home-section.css';

const HomeSection = () => {
  const [tournaments, setTournaments] = useState([])
  
  useEffect(() => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/tournaments`

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => setTournaments(data))
      .catch(error => console.error('Error al obtener torneo: ', error))
  }, [])

  // Lógica para calcular estadisticas
  const totalTournaments = tournaments.length
  const activeTournaments = tournaments.filter(t => t.status === 'Upcoming').length
  const completedTournaments = tournaments.filter(t => t.status === 'completed').length
  const cancelledTournaments = tournaments.filter(t => t.status === 'canceled').length

  const getPorcentage = (count) => {
    if (totalTournaments === 0) return 0
    const percentage = (count / totalTournaments) * 100
    
    if (Number.isInteger(percentage)) return `${percentage}%`
    
    return `${percentage.toFixed(2)}%`
  }

  return (
    <div className="home-section">
      <h2> Resumen de Torneos </h2>

      <p className="home-description">
        Aquí podrás consultar un resumen general los torneos registrados en la plataforma,
        incluyendo cuantos están activos, cuanto ya finalizados y cuantos han sido finalizados.
        Esta vista te brinda una visión rápida del estado actual de las competencias.
      </p>

      {/* TOTAL DE TORNEOS */}
      <div className="stat-card total-card">
        <h3>Total de torneos</h3>
        <p className="stat-number"> {totalTournaments} </p>
      </div>
      
      <div className="status-container">
        {/* TORNEOS ACTIVOS */}
        <div className="stat-card active">
          <h3>Activos:</h3>
          <p className="stat-percentage"> {getPorcentage(activeTournaments)} </p>
        </div>

        {/* TORNEOS COMPLETADOS */}
        <div className="stat-card completed">
          <h3>Completados:</h3>
          <p className="stat-percentage"> {getPorcentage(completedTournaments)} </p>
        </div>

        {/* TORNEOS CANCELADOS */}
        <div className="stat-card canceled">
          <h3>Cancelados:</h3>
          <p className="stat-percentage"> {getPorcentage(cancelledTournaments)} </p>
        </div>

      </div>
    </div>
  )
}

export default HomeSection