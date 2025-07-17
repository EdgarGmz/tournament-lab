// HOOKS
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// COMPONENTS
import LabelParticipant from "../../LabelParticipant";

// CSS
import "../../../css/create-section.css";
import ErrorMessage from "./ErrorMessage";

const TOURNAMENT_TYPES = [
  { value: "", label: "Elige uno" },
  { value: "TCG", label: "Trading Card Game" },
  { value: "videojuegos", label: "Video Juegos" },
  { value: "juegosmesa", label: "Juegos de Mesa" },
  { value: "deporte", label: "Deporte" },
  { value: "inteligencia", label: "Inteligencia" }
]


const CreateSection = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    participants: [],
    start_date: "",
    end_date: "",
    description: "",
    tournament_type: "",
  });

  // States
  const [participantInput, setParticipantsInput] = useState("")
  const [participantsList, setParticipantsList] = useState([])
  const [formErrors, setFormErrors] = useState({})

  // Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }
  const handleAddParticipant = () => {
    const participant = participantInput.trim();

    if (participant && !participantsList.includes(participant)) {
      setParticipantsList((prev) => [...prev, participant]);
      setForm((prev) => ({ ...prev, participant: "" }))
      setParticipantsInput("")
    }
  }
  const handleDeleteParticipant = (nameToDelete) => {
    setParticipantsList((prev) => prev.filter((p) => p !== nameToDelete));
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Reiniciamos los errores al inicio de cada intento de submit
    setFormErrors({})
    const newErrors = {}
    
    if (!form.name.trim()) {
      newErrors.name = "El nombre del torneo debe ser obligatorio!"
    }
      if (participantsList.length < 2) {
      newErrors.participantsList = "Debe haber almenos dos participante para registrar un torneo!"
    }
      if (!form.start_date) {
      newErrors.start_date = "La fehcha de inicio debe ser obligatoria!"
    }
      if (!form.tournament_type) {
      newErrors.tournament_type = "El tipo de torneo es obligatorio!"
    }
    if (!form.description) {
      newErrors.description = "La descripción del torneo es obligatorio!"
    }

    // Si hay errores, actualizamos el estado de errores y detenemos la función
    if (Object.keys(newErrors).length > 0) {
      setFormErrors(newErrors)
      return
    }    

    // Obtenemos el token de autenticación
    const token = localStorage.getItem('token')
    if (!token) {
      alert("Tu sesión ha expirado. Por favor. Inicia sesión de nuevo.")

      // Redirigimos al Login
      navigate('/login')
      return
    }

    // Preparamos los datos para enviar (el 'body' de la petición)
    // Asegúrate de que los nombres de los campos coincidan con los DTOs del backend
    const tournamentData = {
      name: form.name,
      participants: participantsList,
      start_date: form.start_date,
      end_date: form.end_date,
      description: form.description,
      tournament_type: form.tournament_type
    }

    console.log("Enviando los siguientes datos a la API: ", tournamentData)

    try {
      // Construimos la URL y hacemos la petición POST
      const apiURL = `${import.meta.env.VITE_API_URL}/tournaments`

      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tournamentData)
      })

      // Manejamos la respuesta
      if (response.ok) {
        const newTournament = await response.json()
        alert(`¡Torneo "${newTournament.name}", creado con éxito!`)

        // Se limpia el formulario o redirigir al usuario
        setForm({ name: "", start_date: "", end_date: "", description: "", tournament_type: "" })
        setParticipantsList([])
      } else {
        // Si el backend devuelve un error (ejemplo: 400, 500)
        const errorData = await response.json()
        console.error("Error al crear el torneo: ", errorData)
        alert('Hubo un error al crear el torneo. Revisa los datos más tarde.')
      }
      
    } catch (error) {
      // Si hay un error en la conexión de red
      console.log("Error en la conexión: ", error)
      alert("No se pudo conectar con el servidor. Revisa tu conexión de internet")
    }
  }
  const handleClean = () => {
    setParticipantsInput("")
    setParticipantsList([])
    setFormErrors({})

    setForm({
      name:"",
      participants: [],
      start_date: "",
      end_date: "",
      description: "",
      tournament_type: "",
    })
  }

  const participantExists =
    participantInput.trim() !== "" &&
    participantsList.includes(participantInput.trim())

  return (
    <div className="section-container">
      <form onSubmit={handleSubmit}>

        {/* NOMBRE DEL TORENO */}
        <div className="form-group">
          <label>Nombre del torneo</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        {formErrors.name && <ErrorMessage message={formErrors.name} />}

        {/* TIPO DEL TORNEO */}
        <div className="form-group">
          <label>Tipo de Torneo</label>
          <select
            name="tournament_type"
            value={form.tournament_type}
            onChange={handleChange}
          >
            {TOURNAMENT_TYPES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        {formErrors.tournament_type && <ErrorMessage message={formErrors.tournament_type} />}
        
        {/* DESCRIPCIÓN */}
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
          />
        </div>
        {formErrors.description && <ErrorMessage message={formErrors.description} />}
        
        {/* FECHA DE INICIO */}
        <div className="form-group">
          <label>Fecha de inicio:</label>
          <input
            type="date"
            name="start_date"
            value={form.start_date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
          />
        </div>
        {formErrors.start_date && <ErrorMessage message={formErrors.start_date} />}

        {/* AGREGAR PARTICIPANTES */}
        <div className="form-group">
          <label>Agregar participante:</label>
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              name="participant"
              value={participantInput}
              onChange={(e) => setParticipantsInput(e.target.value)}
              placeholder="Nombre del participante"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddParticipant();
                }
              }}
            />
            {formErrors.participantsList && <ErrorMessage message={formErrors.participantsList} />}
            
            <button
              type="button"
              onClick={handleAddParticipant}
              disabled={
                !participantInput.trim() ||
                participantsList.includes(participantInput.trim())
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
        
        {/* BORRAR PARTICIPANTE */}
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

        {/* ACTION BUTTONS */}
        <div className="section-actions">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          <button type="button" onClick={handleClean} className="btn btn-primary">
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSection;
