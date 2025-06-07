
const TournamentCard = ({name, status, participants, description}) => {
    return (
        <div className="card mb-3 shadow-sm bg-secondary text-light">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text">
                    <small className="text-muted">Estado: {status}</small>
                </p>
                <p className="card-text">
                    <small className="text-muted">Participantes: {participants}</small>
                </p>
            </div>
       </div>
    )
}

export default TournamentCard;
