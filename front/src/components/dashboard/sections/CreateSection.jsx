// HOOKS
import { useState } from "react";

// COMPONENTS
import LabelParticipant from "../../LabelParticipant";

// CSS
import "../../../css/create-section.css";

const TOURNAMENT_TYPES = [
  { value: "", label: "Elige uno" },
  { value: "TCG", label: "Trading Card Game" },
  { value: "videojuegos", label: "Video Juegos" },
  { value: "juegosmesa", label: "Juegos de Mesa" },
  { value: "deporte", label: "Deporte" },
];

const CreateSection = () => {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    participant: "",
  });

  const [participantsList, setParticipantsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddParticipant = () => {
    const participant = form.participant.trim();
    if (participant && !participantsList.includes(participant)) {
      setParticipantsList((prev) => [...prev, participant]);
      setForm((prev) => ({ ...prev, participant: "" }));
    }
  };

  const handleDeleteParticipant = (nameToDelete) => {
    setParticipantsList((prev) => prev.filter((p) => p !== nameToDelete));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Crear Torneo: ", {
      name: form.name,
      type: form.type,
      description: form.description,
      participants: participantsList,
    });
  };

  const participantExists =
    form.participant.trim() !== "" &&
    participantsList.includes(form.participant.trim());

  return (
    <div className="section-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre del torneo</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Tipo de Torneo</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            {TOURNAMENT_TYPES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Agregar participante:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              name="participant"
              value={form.participant}
              onChange={handleChange}
              placeholder="Nombre del participante"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddParticipant();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddParticipant}
              disabled={
                !form.participant.trim() ||
                participantsList.includes(form.participant.trim())
              }
            >
              Agregar
            </button>
          </div>
          {participantExists && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              Este participante ya fue agregado.
            </div>
          )}
        </div>

        {participantsList.length > 0 && (
          <div className="list-participants">
            <label>Participantes agregados {participantsList.length}: <br/></label>
            {participantsList.map((p) => (
                <LabelParticipant
                  key={p}
                  name={p}
                  onClick={() => handleDeleteParticipant(p)}
                />
            ))}
          </div>
        )}

        <div className="section-actions">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button type="button" className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateSection;
