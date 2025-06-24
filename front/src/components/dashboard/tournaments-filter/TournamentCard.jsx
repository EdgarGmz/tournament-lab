import { FcInfo } from "react-icons/fc";
import "../../../css/tournament-card.css";
import { useNavigate } from "react-router-dom";

const statusConfig = {
    activo: {
        bgColor: "lightblue",
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants", render: (v) => v.length },
            { label: "Fecha de creación", key: "startDate" }
        ]
    },
    cancelado: {
        bgColor: "lightcoral",
        fields: [
            { label: "Status", key: "status" },
            { label: "Participantes", key: "participants", render: (v) => v.length },
            { label: "Fecha de creación", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Razón de cancelación", key: "reason_cancellation" }
        ]
    },
    completado: {
        bgColor: "lightsalmon",
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
                    <button className="action-button" onClick={navigate(`/detail/${props.id}`)}>
                       INFO <FcInfo /> 
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TournamentCard;
