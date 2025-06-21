import "../../../css/tournament-card.css";

const TournamentCard = ({name, status, participants, description, startDate, endDate,reason_cancellation, champion}) => {
    const lowerStatus = status.toLowerCase()

    let bgColor = ""
    let content = null
    let actionButton = null

    switch(lowerStatus){
        case "activo":
            bgColor = "lightblue"
            content = (
                <>
                    <label> <b>Status: </b> { status } </label>
                    <label> <b>Participantes: </b> { participants.length } </label>
                    <label> <b>Fecha de creación: </b> { startDate } </label>
                </>
            )

            actionButton = <button className="action-button"> Ver torneo </button>
            break

        case "cancelado":
            bgColor = "lightcoral"
            content = (
                <>
                    <label> <b>Status: </b> { status } </label>
                    <label> <b>Participantes: </b> { participants.length } </label>
                    <label> <b>Fecha de creación: </b> { startDate } </label>
                    <label> <b>Fecha de finalización: </b> { endDate } </label>
                    <label> <b>Razón de cancelación: </b> { reason_cancellation } </label>
                    
                </>
            )

            actionButton = <button className="action-button"> Ver historial del torneo </button>
            break

        case "completado":
            bgColor = "lightsalmon"
            content = (
                <>
                    <label> <b>Status: </b> { status } </label>
                    <label> <b>Fecha de creación: </b> { startDate } </label>
                    <label> <b>Fecha de finalización: </b> { endDate } </label>
                    <label> <b>Campeón: </b> { champion } </label>

                </>
            )

            actionButton = <button className="action-button"> Ver Historial del Torneo </button>
            break

        default:
            content = <label> Estado Desconocido </label>
        

    }

    return (
        
        <div className="tournament-card" style={{backgroundColor: bgColor}}>
            <h1 className="main-title">{name}</h1>
            <label className="description"> <b> {description} </b></label>

            <div className="extra-info">
                {content}
            </div>

            <div className="card-actions">
                {actionButton}
            </div>
            
        </div>
    );
}

export default TournamentCard;
