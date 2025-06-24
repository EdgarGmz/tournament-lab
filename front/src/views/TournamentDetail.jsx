// HOOKS
import { useParams } from 'react-router-dom'

// CONSTANTS
import { tournaments } from '../constants/constanst'

const TournamentDetail = () => {
    const { id } = useParams()
    const torneo = tournaments.find( t => t.id === parseInt(id))

    if(!torneo) return <p> Torneo no encontrado...</p>

    return(
        <div className='detalle-torneo'>
            <h2>{torneo.name}</h2>
            <p><b>Estado: {torneo.status} </b></p>
            <p><b>Descripción: {torneo.description} </b></p>
            <p><b>Participantes: {torneo.participants.lenght} </b></p>

            {torneo.status.toLowerCase() === "activo" &&(
                <>
                    <h3>Rondas</h3>
                    {/* Aquí mapear las rondas si tienes esa info */}

                    <button> Actualizar Rondas </button>
                    <button> Finalizar Rondas </button>
                </>
            )}

            {torneo.status.toLowerCase() === "cancelado" &&(
                <>
                    <h3>Movimientos</h3>
                    {/* Mostrar los movimientos del torneo antes que se cancelara */}
                </>
            )}

            {torneo.status.toLowerCase() === "completado" &&(
                <>
                    <h3>Resumen Final</h3>
                    <p>Campeon: {torneo.champion} </p>
                    {/* Mostrar el historial del torneo */}
                </>
            )}
        </div>
    )
}

export default TournamentDetail
