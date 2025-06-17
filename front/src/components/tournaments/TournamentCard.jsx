
const TournamentCard = ({name, status, participants, description, date, champion}) => {
    return (
        <div className="tournament-card">
            <label>Nombre del torneo: {name}</label>
            <label>Status: {status}</label>
            <label>Participantes: {participants}</label>
            <label>Descripción: {description}</label>
            <label>Fecha de creación: {date}</label>
            <label>Campeon: {champion}</label>
        </div>
    );
}

export default TournamentCard;
