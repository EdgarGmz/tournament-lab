import { FcInfo } from "react-icons/fc";
import "../../../css/tournament-card.css";

const statusConfig = {
    upcoming: {
        bgColor: "#FFF9C4", 
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants" },
            { label: "Inicio de torneo", key: "startDate" }
        ]
    },
    canceled: {
        bgColor: "#FFCDD2",
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants", render: (v) => v.length },
            { label: "Inicio de torneo", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Razón de cancelación", key: "reason_cancellation" }
        ]
    },
    completed: {
        bgColor: "#A5D6A7",
        fields: [
            { label: "Status", key: "status" },
            { label: "Inicio de torneo", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Campeón", key: "champion" }
        ]
    }
};

const TournamentCard = (props) => {

    const lowerStatus = props.status?.toLowerCase();
    const config = statusConfig[lowerStatus];

    return (
        <div
            className="tournament-card"
            style={{ backgroundColor: config?.bgColor || undefined }}
        >
            <h1 className="main-title">{props.name}</h1>
            <label className="description">
                <b>{props.description}</b>
            </label>
            <div className="extra-info">
                {config ? (
                    config.fields.map(({ label, key, render }) => (
                        <label key={key}>
                            <b>{label}: </b>
                            {render ? render(props[key]) : props[key]}
                        </label>
                    ))
                ) : (
                    <label>Estado Desconocido</label>
                )}
                
                <div className="card-actions">
                    {/* Renderizado condicional */}
                    {props.status.toLowerCase() === 'upcoming' && (
                        <a
                            className="action-button"
                            href={`/tournament/${props.id}`}
                            target="_blanck"
                            rel="nooper noreferrer"
                        >
                            Iniciar <FcInfo />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
