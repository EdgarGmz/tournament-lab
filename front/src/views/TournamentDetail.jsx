import { useParams } from 'react-router-dom';
import { tournaments } from '../constants/constanst';
import TournamentMatch from '../components/dashboard/TournamentMatch';
import '../css/tournament-detail.css';

const TournamentDetail = () => {
    const { id } = useParams();
    const torneo = tournaments.find(t => t.id === Number(id));

    if (!torneo) return <p>Torneo no encontrado...</p>;

    const { name, status, description, participants = [] } = torneo;

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
            </div>
            <div>
                {['activo', 'cancelado', 'completado'].includes(status?.toLowerCase()) && (
                    <TournamentMatch participants={participants} />
                )}
            </div>
        </div>
    );
};

export default TournamentDetail;
