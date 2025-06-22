// HOOKS
import { useState } from "react"
//COMPONENTS

// CSS
import '../../../css/create-section.css'

const CreateSection = () => {
  const [name, setName] = useState("")
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [participants, setParticipants] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Crear Torneo: ", {name, type, description, participants})
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
          <input type="text" value={ participants } onChange={ (e) => setDescription( e.target.value )} />
        </div>

        {/* Participantes */}
        <div className="form-group">
          <label> Agregar participantes: </label>
          <input type="text" value={ participants } onChange={ (e) => setParticipants( e.target.value )}/>
        </div>

        {/* Botones */}
        <div className="section-actions">
          <button type="submit" className="btn btn-primary"> Guardar </button>
          <button type="submit" className="btn btn-primary"> Cancelar </button>
        </div>

      </form>
    </div>
    
  )
}

export default CreateSection

