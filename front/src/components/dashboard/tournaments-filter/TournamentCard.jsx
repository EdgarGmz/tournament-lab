// Icons
import { MdPlayCircleOutline } from 'react-icons/md';
import { TiDeleteOutline } from "react-icons/ti";
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
            { label: "Inicio de torneo", key: "startDate" },
            { label: "Fecha de finalización", key: "endDate" },
            { label: "Razón de cancelación", key: "reasonCancellation" }
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
        <div className="tournament-card">
            <h1 className="main-title">{props.name}</h1>
            <label className="description"><b>{props.description}</b></label>

            <div className="extra-info">
                {config ? (
                config.fields.map(({ label, key, render }) => (
                    <label key={key}>
                    <b>{label}:</b> {render ? render(props[key]) : props[key]}
                    </label>
                ))
                ) : (
                <label>Estado Desconocido</label>
                )}

                <div className="card-actions">
                    <a className="action-button delete" onClick={() => props.onDelete(props.id)}>
                        <TiDeleteOutline />
                    </a>

                    {['upcoming', 'active'].includes(props.status.toLowerCase()) && (
                        <a
                            className="action-button play"
                            href={`/tournament/${props.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                        <MdPlayCircleOutline />
                        </a>
                    )}
                </div>
            </div>
            </div>


    );
};

export default TournamentCard;
