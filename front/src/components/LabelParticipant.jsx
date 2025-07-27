import { RxCross1 } from "react-icons/rx";

// import '../css/label-participant.css';

function LabelParticipant({ name, onClick }) {
  return (
    <button
      type="button"
      className="container-participant"
      onClick={onClick}
      aria-label={`Remove ${name}`}
    >
      <span className="participant-name">{name}</span>
      <RxCross1 className="icon-remove" aria-hidden="true" />
    </button>
  );
}

export default LabelParticipant;