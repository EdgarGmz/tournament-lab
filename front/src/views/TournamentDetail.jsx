// HOOKS
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTS
import TournamentBracket from '../components/dashboard/TournamentBracket';
import '../css/tournament-detail.css';

const TournamentDetail = () => {
    const { id } = useParams();
    const [ torneo, setTorneo ] = useState( null )
    const [ loading, setLoading ] = useState( true )
    const [ error, setError ] = useState( null )
    const [ determinedChampion, setDeterminedChampion ] = useState( null )

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
        if (reason === null && reason.trim() === '') {
            alert('La razón de cancelación no puede estar vacía')
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
                    name: torneo.name,
                    description: torneo.description,
                    startDate: torneo.startDate,
                    endDate: torneo.endDate,
                    tournament_type: torneo.tournament_type,
                    status: 'canceled',
                    reasonCancellation: reason
                })
            })
            if (response.ok) {
                alert(`¡Torneo "${torneo.name}" cancelado con éxito!`)
                fetchTournament();
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

    const handleFinalizeTournament = async() => {
        let finalChampion = determinedChampion // <- Intentamos usar al campeón del bracket primero

        // Si no hay campeón determinado por el bracket, pedimos uno manualmente
        if (!finalChampion) {
            const promptedChampion = prompt('Por favor, introduce el nombre del campeón: ')
            if (promptedChampion === null || promptedChampion.trim() === '') {
                alert('El nombre del campeón no puede estar vacío')
                return
            }
            finalChampion = promptedChampion.trim()
        }

        // Ahora que tenemos al campeón (ya sea por el bracket o del prompt)
        // Podemos enviar la petición al backend
        const token = localStorage.getItem('token')
        if (!token) {
            alert("Tu sesión ha expirado. Por favor, inicia sesión de nuevo")
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
                    champion: finalChampion
                })

            })

            if (response.ok) {
                alert(`¡Torneo "${torneo.name}" finalizado con éxito! Campeón: ${finalChampion}`)
            } else {
                const errorData = await response.json()
                console.log('Error al finalizar el torneo: ', errorData)
                alert('Hubo un error al finalizar el torneo. Intenta de nuevo.')
            }
        } catch (error) {
            console.error('Error de conexión al finalizar el torneo: ', error)
            alert('No se pudo conectar con el servidor. Revisa tu conexión de internet')
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
        <div>
            <div className="tournament-detail">
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


            </div>
            <div className="tournament-actions">
                {/* Botones de Cancelar y Finalizar */}
                {status.toLowerCase() === 'upcoming' && (
                    <>
                        <button onClick={handleCancelTournament}>Cancelar Torneo</button>
                        <button onClick={handleFinalizeTournament}>Finalizar Torneo</button>
                    </>
                )}
            </div>
            <div>
                {/* Renderiza TournamentBracket solo si el torneo está en un estado donde se pueda jugar */}
                {['upcoming', 'active'].includes(status?.toLowerCase()) && participants.length > 1 && (
                    <TournamentBracket
                        participants={participants}
                        onChampionDetermined={setDeterminedChampion} // <- Pasa la función de callback
                    />
                )}

                {/* Muestra al campeón si ya fue determinado por el Bracket */}
                {determinedChampion && (
                    <h2>Campeón del Torneo: {determinedChampion}</h2>
                )}
                
            </div>
        </div>
    );
};

export default TournamentDetail;
