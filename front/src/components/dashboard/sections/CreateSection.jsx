// HOOKS
import { useState } from "react"

//COMPONENTS
import LabelParticipant from "../../LabelParticipant"

// CSS
import '../../../css/create-section.css'



const CreateSection = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [participants, setParticipants] = useState("")
  const [participantsList, setParticipantsList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Crear Torneo: ", {name, type, description, participants})
  }

  // Agregar participante
  const handleAddParticipant = () => {
      if (participants.trim()) {
        setParticipantsList((prev) => [...prev, participants.trim()]);
        setParticipants("");
      }
  }
  
  // Borrar de la lista a participante
  const handleDeleteParticipant = (nameToDelete) => {
    setParticipantsList((prev) => prev.filter((p) => p !== nameToDelete));
    console.log("Participante borrado:", nameToDelete);
  }

  

  return (

    <div className="section-container">
      <h3> Crear Nuevo Torneo </h3>
      <form onSubmit={handleSubmit}>
      
        {/* Nombre del torneo */}
        <div className="form-group">
          <label>Nombre del torneo</label>
          <input type="text" value={ name } onChange={ (e)=> setName( e.target.value ) } />
        </div>

        {/* Tipo de Jeugo */}
        <div className="form-group">
          <label> Tipo de Torneo </label>
          <select value={ type } onChange={ (e) => setType( e.target.value ) }>
            <option value=""> Elige uno </option>
            <option value="TCG"> Trading Card Gam e</option>
            <option value="videojuegos"> Video Juegos </option>
            <option value="jueugosmesa"> Jeugos de Mesa </option>
            <option value="deporte"> Deporte </option>
          </select>
        </div>

        {/* Descripción */}
        <div className="form-group">
          <label> Descripción: </label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>

        {/* Participantes */}
        <div className="form-group">
          <label> Agregar participante: </label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              value={participants}
              onChange={(e) => setParticipants(e.target.value)}
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
              disabled={!participants.trim() || participantsList.includes(participants.trim())}
            >
              Agregar
            </button>
          </div>
          {participantsList.includes(participants.trim()) && participants.trim() !== "" && (
            <div style={{ color: "red", fontSize: "0.9em" }}>
              Este participante ya fue agregado.
            </div>
          )}
        </div>

        {/* Lista de participantes */}
        {participantsList && participantsList.length > 0 && (
          <div className="form-group">
            <label>Participantes agregados:</label>
              {participantsList.map((p, idx) => (
                <LabelParticipant key={idx} name={p} onClick={() => handleDeleteParticipant(p)} />
              ))}
          </div>
        )}

        {/* Botones de acción */}
        <div className="section-actions">
          <button type="submit" className="btn btn-primary"> Guardar </button>
          <button type="button" className="btn btn-primary"> Cancelar </button>
        </div>
  

      </form>
    </div>
    
  )
}

export default CreateSection

