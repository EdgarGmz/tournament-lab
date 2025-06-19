import "../../../css/tournament-card.css";

const TournamentCard = ({name, status, participants, description, startDate, endDate, champion}) => {
    return (
        <div className="tournament-card">
            <h1 className="main-title">{name}</h1>
            <label className= "description"><b>Descripción: </b> {description}</label>
            
            <div className="extra-info">
                <label><b>Status: </b> {status}</label>
                <label><b>Participantes: </b> {participants}</label>
                <label><b>Fecha de creación: </b>{startDate}</label>
                <label><b>Fecha de finalización: </b>{endDate}</label>
                <label><b>Campeon: </b> {champion || "Por definir" }</label>
            </div>
        </div>
    );
}

export default TournamentCard;
