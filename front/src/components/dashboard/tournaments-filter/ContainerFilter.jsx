// HOOKS
import { useState } from 'react';

// Components
import { BsGrid3X3GapFill } from "react-icons/bs";
import { MdOutlineSearch } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";
import { tournaments } from '../../../constants/constanst.js';
import TournamentCard from './TournamentCard.jsx';

// CSS
import '../../../css/container-filter.css';

const ContainerFilter = ( { statusFilter } ) => {
    const  [ order, setOrder ]  = useState('recent')
    const [ view, setView ]  = useState('grid')
    const [ searchTerm, setSearchTerm ] = useState("")
    
    const filtered = statusFilter === "totales"
        ? tournaments
        : tournaments.filter(t => t.status.toLocaleLowerCase()
                .includes(statusFilter
                    .toLocaleLowerCase()))
    
    const searched = filtered.filter(t =>
        t.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
     )
    
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
                {sorted.map((tournament) => (
                    <TournamentCard
                        key={ tournament.id }
                        id= { tournament.id }
                        name={ tournament.name }
                        status={ tournament.status }
                        participants={ tournament.participants.length }
                        description={ tournament.description }
                        startDate={ tournament.startDate }
                        endDate={ tournament.endDate }
                        champion={ tournament.champion }
                        reason_cancellation={ tournament.reason_cancelation }
                    />
                ))}
            </div>
        </div>
        

    );
}

export default ContainerFilter;
