// HOOKS
import { useState } from 'react';

// Components
import { BsGrid3X3GapFill } from "react-icons/bs";
import { TfiViewListAlt } from "react-icons/tfi";
import { tournaments } from '../../../constants/tournaments.js';
import TournamentCard from './TournamentCard.jsx';
import { MdOutlineSearch } from "react-icons/md";

// CSS
import '../../../css/container-filter.css';

const ContainerFilter = ({statusFilter}) => {
    const  [ order, setOrder ]  = useState('recent')
    const [ view, setView ]  = useState('grid')
    const [ searchTerm, setSearchTerm ] = useState("")
    
    const filtered = statusFilter === "Totales"
        ? tournaments
        : tournaments.filter(t => t.status.toLocaleLowerCase().includes(statusFilter.toLocaleLowerCase()))
    
    const sorted = [...filtered].sort((a, b) => {
        // Simulacion con campo ficticio date (añadelo si aun no existe)
        const dateA = new Date(a.date || "2023-01-01")
        const dateB = new Date(b.date || "2023-01-01")
        return order === 'recent' ? dateB - dateA : dateA - dateB
    })


    return (
        <div className="container-filter">
            <div className="filter-toolbar">
                <div className='search-box'>
                    <input 
                        type="text" 
                        placeholder="Buscar torneo..."                    
                    />
                    <MdOutlineSearch className='search-icon'/>
                </div>

                <div>
                    <label>Ordenar por:</label>
                    <select
                        className="select-order"
                        value={order}
                        onChange={(e) => setOrder(e.target.value)}
                    >
                        <option value="recent">Más reciente</option>
                        <option value="oldest">Más antiguo</option>
                    </select>
                </div>



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

            
            <div className={view === "grid" ? "grid-view" : "list-view"}>
                {sorted.map((tournament, index) => (
                    <TournamentCard
                        key={index}
                        name={tournament.name}
                        status={tournament.status}
                        participants={tournament.participants.length}
                        description={tournament.description}
                        startDate={tournament.startDate}
                        endDate={tournament.endDate}
                        champion= {tournament.champion}
                    />
                ))}
            </div>
        </div>
        

    );
}

export default ContainerFilter;
