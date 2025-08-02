// HOOKS
import { useEffect, useState } from 'react';

// Components
import TournamentCard from './TournamentCard.jsx';
import SectionCard from '../../Section.jsx';

// Icons
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";

const ContainerFilter = ({ statusFilter, onSectionChange }) => {

    const [tournaments, setTournaments] = useState([]);
    const  [ order, setOrder ]  = useState('recent')
    const [ view, setView ]  = useState('grid')
    const [ searchTerm, setSearchTerm ] = useState("")
    
    // Filtreo y Orden
    const filtered = statusFilter === "totales"
        ? tournaments
        : tournaments.filter(t => t.status?.toLocaleLowerCase()
                .includes(statusFilter
                    .toLocaleLowerCase()))
    
    const searched = filtered.filter(t =>
        t.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
    
    const sorted = [...searched].sort((a, b) => {
        const startA = new Date(a.startDate || "1900-01-01")
        const startB = new Date(b.startDate || "1900-01-01")
        const endA = new Date(a.endDate || "2100-01-01")
        const endB = new Date(a.endDate || "2100-01-01")

        switch (order) {
            case 'startDateAsc':
                return startA - startB
            case 'startDateDesc':
                return startB - startA
            case 'endDateAsc':
                return endA - endB
            case 'endDateDesc':
                return endB - endA
            case 'oldest':
                return startA - startB
            case 'recent':
            default: 
                return startB -startA
            
        }
    })

    // Handlers
    const handleDeleteTournament = async (tournamentId) => {

        if (!window.confirm('¿Estas seguro de eliminar este torneo?. Esta acción es irreversible.')) {
            return // <- Si el usuario cancela, no hacemos nada.
        }

        // Validar token
        const token = localStorage.getItem('token')
        if (!token) {
            alert('Tu sesión ha expirado. Por favor inicia sesion nuevamente')
            return
        }

        try {
            const urlApi = `${import.meta.env.VITE_API_URL}/tournaments/${tournamentId}`
            const response = await fetch(urlApi, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })

            if (response.ok) {
                alert('Torneo eliminado con éxito!')
                setTournaments(prevTournaments => prevTournaments.filter(t => t.id !== tournamentId))
            } else {
                const errorData = await response.json()
                console.error('Error al eliminar el torneo: ', errorData)
                alert('Hubo un error al eliminar el torneo, Intenta de nuevo.')
            }
        } catch (error) {
            console.error('Error al eliminar el torneo: ', error)
            alert('No se pudo conectar con el servidor. Revisa tu conexión de internet.')
        }


    }

    useEffect(() => {
        const fetchTournament = async () => {
            // Obtenemos el Token del localStorage
            const token = localStorage.getItem('token')
            if (!token) {
                console.log("No se encontró el token de aunteticación!")
                return
            }

            try {
                // Hacemos la patición a la API, incluyendo el token en las cabeceras
                const apiUrl = `${import.meta.env.VITE_API_URL}/tournaments`

                const response = await fetch(apiUrl, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                // Si la respuesta es exitosa
                if (response.ok) {
                    const data = await response.json() 
                    setTournaments(data)
                } else {
                    // Si hay un error en la respuesta (ejemplo: 401 No autorizado)
                    console.log('Error al obtener los torneos', response.statusText)
                }
            } catch (error) {
                // Si hay un error en la conexión (ejemplo: API no disponible)
                console.error('Error en la petición para obtener torneos', error)
            }
        }
        // Llamamos a la función que queremos acabamos de crear
        fetchTournament()
    }, []) 

    // Funcionalidad para mensaje 'No encontrado'
    const SortedTournamentCard = () => {
        return (
            sorted.map((tournament) => (
                <TournamentCard
                    key={tournament.id}
                    id={tournament.id}
                    name={tournament.name}
                    status={tournament.status}
                    participants={tournament.participants.length}
                    description={tournament.description}
                    startDate={tournament.startDate}
                    endDate={tournament.endDate}
                    champion={tournament.champion}
                    reasonCancellation={tournament.reasonCancellation}
                    onDelete={handleDeleteTournament}
                />
            ))
        )
    }

    const LengthTournamentCard = SortedTournamentCard().length

    const getNotFoundMessage = () => {
        switch(statusFilter){
            case 'upcoming':
                return <SectionCard id="no-tournaments-active" title="No hay torneos activos" alt={true} center={true} className="empty-section">
                    <button onClick={() => onSectionChange('crear')}> Crear Torneo </button>
                </SectionCard>

            case 'completed':
                return <SectionCard id="no-tournaments-completed" title="No hay torneos completados" alt={true} center={true} className="empty-section">
                    <button onClick={() => onSectionChange('activos')}> Ir a Torneos Activos </button> 
                </SectionCard>
            
            case 'canceled':
                return <SectionCard id="no-tournaments-canceled" title="No hay torneos  cancelados" alt={true} center={true} className="empty-section">
                    <button onClick={() => onSectionChange('activos')}> Ir a Torneos Activos </button> 
                </SectionCard>
                
            case 'totales':
                return <SectionCard id="no-tournaments-total" title="No hay torneos registrados" alt={true} center={true} className="empty-section">
                    <button onClick={() => onSectionChange('crear')}> Crear Torneo </button> 
                </SectionCard>  
            default:
                return <SectionCard id="no-tournaments" title="No hay torneos registrados" alt={true} center={true} className="empty-section">
                    <p>Error!</p>
                </SectionCard>
        }
    }

    return (
        <div className="container-filter">
            <div className="filter-toolbar">
                {/* BUSCAR */}
                <div className='search-box'>
                    <input
                        type="text"
                        placeholder="Buscar torneo..."
                        value={ searchTerm }
                        onChange={(e) => { setSearchTerm(e.target.value) } }
                    />
                    <MdOutlineSearch className='search-icon'/>
                </div>
                
                {/* ORDENAR POR... */}
                <div>
                    <label>Ordenar por:</label>
                    <select
                        className="select-order"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="recent"> Más reciente </option>
                        <option value="oldest"> Más antiguo </option>
                        <option value="startDateAsc">Fecha de inicio ↑</option>
                        <option value="startDateDesc">Fecha de inicio ↓</option>
                        <option value="endDateAsc">Fecha de fin ↑</option>
                        <option value="endDateDesc">Fecha de fin ↓</option>

                    </select>
                </div>

                {/* GRID O LIST */}
                <div className="view-toggle">
                    <button
                        className={view === "grid" ? "active" : ""}
                        onClick={() => setView("grid")}
                    >
                        {/* Icon */}
                        <BsGrid3X3GapFill />

                    </button>
                    <button
                        className={view === "list" ? "active" : ""}
                        onClick={() => setView("list")}
                    >
                        {/* Icon */}
                        <TfiViewListAlt />

                    </button>
                </div>
            </div>

            {/* TOURNAMENT-CARDS */}
            <div className={view === "grid" ? "grid-view" : "list-view"}>                
                { LengthTournamentCard > 0 ? SortedTournamentCard() : <p>{getNotFoundMessage()}</p> }                
            </div>
        </div>
        

    );
}

export default ContainerFilter;
