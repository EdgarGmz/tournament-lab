import { FcInfo } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import "../../../css/tournament-card.css";

const statusConfig = {
    activo: {
        bgColor: "#FFF9C4", 
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants", render: (v) => v.length },
            { label: "Fecha de creación", key: "startDate" }
        ]
    },
    cancelado: {
        bgColor: "#FFCDD2",
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants", render: (v) => v.length },
            { label: "Fecha de creación", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Razón de cancelación", key: "reason_cancellation" }
        ]
    },
    completado: {
        bgColor: "#A5D6A7",
        fields: [
            { label: "Status", key: "status" },
            { label: "Fecha de creación", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Campeón", key: "champion" }
        ]
    }
};

const TournamentCard = (props) => {
    const navigate = useNavigate()
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
                    <a
                        className="action-button"
                        href={`/tournament/${props.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        INFO <FcInfo />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
