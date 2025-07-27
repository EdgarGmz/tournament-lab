// HOOKS
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// COMPONENTS
import TournamentBracket from '../components/dashboard/TournamentBracket';

// Css
// import '../css/tournament-detail.css';

const TournamentDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ torneo, setTorneo ] = useState( null )
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( null )
    

    const fetchTournament = useCallback(async () => {
        const token = localStorage.getItem('token')
        if (!token) {
            setError("No se encontró el token de autenticación.")
            setLoading(false)
            return
        }

        try {
            const apiUrl = `${import.meta.env.VITE_API_URL}/tournaments/${id}`
            const response = await fetch(apiUrl, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            if (response.ok) {
                const data = await response.json()
                console.log("Datos recibidos de la API: ", data)
                setTorneo(data)
            } else {
                setError(`Error al cargar el torneo: ${response.statusText}`)
            }
        } catch (error) {
            setError(`Error de conexión: ${error.message}`)
        } finally {
            setLoading(false)
        }
    }, [id])
    
    useEffect(() => {
        fetchTournament()
    }, [fetchTournament])

    // Handlers
    const handleCancelTournament = async() => {
        const reason = prompt('Por favor, introduce la razón de la cancelación: ')
        if (reason === null || reason.trim() === '') {
            alert('La razón de cancelación no puede estar vacía')
            return;
        }

        const token = localStorage.getItem('token')
        if (!token) {
            alert('Tu sesión ha expirado. Por favor, vuelve a iniciar sesión')
            return
        }

        try {
            const apiUrl = `${import.meta.env.VITE_API_URL}/tournaments/${id}`
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    status: 'canceled',
                    champion: 'none',
                    reasonCancellation: reason
                })
            })
            if (response.ok) {
                alert(`¡Torneo "${torneo.name}" cancelado con éxito!`)
                navigate('/dashboard');
            } else {
                const errorData = await response.json()
                console.log('Error al cancelar el torneo: ', errorData)
                alert('Hubo un error al cancelar el torneo. Intenta de nuevo')
            }
        } catch (error) {

            console.error('Error de conexión al cancelar el torneo: ', error)
            alert('No se pudo conectar con el servidor. Revisa tu conexión de internet.')
            
        }
    }

    const handleFinalize = async (championName) => {
        // Validamos el token
        const token = localStorage.getItem('token')
        if (!token) {
            alert('Tu sesión ha expirado. Por favor inicie sesión nuevamente')
            return
        }

        try {
            const apiUrl = `${import.meta.env.VITE_API_URL}/tournaments/${id}`
            const response = await fetch(apiUrl, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    status: "completed",
                    champion: championName
                })
            })

            if (response.ok) {
                alert(`Torneo "${torneo.name}" finalizado con éxito. Campeón: ${championName}`)
                navigate('/dashboard')
            } else {
                const errorData = await response.json()
                console.log('Error en finalizar el torneo: ', errorData)
                alert('Hubo un error al finalizar el torneo. Intenta de nuevo.')
            }
        } catch (error) {
            console.error('Error en finalizar el torneo. ', error)
            alert('No se pudo conectar al servidor. Por favor verifique su conexión de internet.')
        }
    }

    if (loading) return <p>Cargando Torneo...</p>
    if (error) return <p>Error: {error}</p>
    if (!torneo) {
        console.log("Torneo es null, mostrando mensaje de no encontrado.")
        return <p>Torneo no encontrado.</p>;
    }
    
    const { name, status, description, participants = [], champion, reasonCancellation } = torneo;

    return (
    <div className="tournament-container"> 
        <aside className="tournament-detail">
            <h2>{name}</h2>
            <p><b>Estado:</b> {status}</p>
            <p><b>Descripción:</b> {description}</p>
            <p><b>Participantes:</b></p>
            <ul>
                {participants.length > 0 ? (
                    participants.map((p, idx) => <li key={idx}>{p}</li>)
                ) : (
                    <li>No hay participantes</li>
                )}
            </ul>

            {status.toLowerCase() === 'completed' && champion && (
                <p><b>🏆 Campeón:</b> {champion}</p>
            )}

            {status.toLowerCase() === 'canceled' && reasonCancellation && (
                <p><b>Motivo de cancelación: </b> {reasonCancellation}</p>
            )}

            <div className="tournament-actions">
                {status.toLowerCase() === 'upcoming' && (
                    <>
                        <button onClick={ handleCancelTournament }> Cancelar Torneo </button>
                    </>
                )}
            </div>
        </aside>

        <div className="tournament-bracket">
            {['upcoming', 'active'].includes(status?.toLowerCase()) && participants.length > 1 && (
                <TournamentBracket
                    participants ={ participants }
                    onFinalize = { handleFinalize }
                />
            )}
        </div>

        {/* AYUDA VISUAL PARA EL USUARIO */}
        <aside className='help'>
            <h1>¿Como funciona el bracket?</h1>
            <h3>1. Selecciona al ganador: </h3> 
            <p> 
                Para cada enfrentamiento, haz click sobre el nombre del participante que ganó la partida.
                Verás que su botón cambia de color para marcarlo como vencedor.
            </p>
            
            <h3>2. Avanza a la siguiente ronda: </h3> 
            <p> 
                Una vez que hayas elegido un ganador para todas las partidas de la ronda actual,
                se habilitará el botón "Siguiente Ronda". Haz click en él para continuar.
            </p>

            <h3>3. Llega hasta el fina: </h3> 
            <p> 
                Repide el proceso en cada ronda. Los ganadores avanzarán y se enfrentarán entre sí hasta 
                que solo quede un participante.
            </p>

            <h3>4. Corona al campeón: </h3>
            <p>  Cuando llegues a la última partida, haz click en "Finalizar Torneo" para declarar al campeón.</p>
        </aside>        
    </div>
);

};

export default TournamentDetail;
