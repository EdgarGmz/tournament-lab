// HOOKS
import { useParams } from 'react-router-dom';
import { tournaments } from '../constants/constanst';

// COMPONENTS

// CSS
import '../css/tournament-detail.css';

const TournamentDetail = () => {
    const { id } = useParams();
    const torneo = tournaments.find(t => t.id === Number(id));

    if (!torneo) return <p>Torneo no encontrado...</p>;

    const status = torneo.status?.toLowerCase();

    const renderStatusComponent = () => {
        switch (status) {
            case 'activo':
                return (
                    <>
                        Componente para inicializar el torneo (rondas)
                    </>
                );
            case 'cancelado':
                return (
                    <>
                        Componente para detalles del torneo cancelado
                    </>
                );
            case 'completado':
                return (
                    <>
                        Componente para detalles del torneo completado
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="tournament-detail">
            <h2>{torneo.name}</h2>
            <p><b>Estado:</b> {torneo.status}</p>
            <p><b>Descripción:</b> {torneo.description}</p>
            <p><b>Participantes:</b></p>
            <ul>
                {torneo.participants && torneo.participants.length > 0 ? (
                    torneo.participants.map((p, idx) => (
                        <li key={idx}>{p}</li>
                    ))
                ) : (
                    <li>No hay participantes</li>
                )}
            </ul>
            {renderStatusComponent()}
        </div>
    );
};

export default TournamentDetail;
