// HOOKS
import { useState } from 'react';

// CSS
import '../../../css/create-modal.css';

const CreateModal = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");  
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscar Torneo:", { nombre, tipo, descripcion });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h3>Crear nuevo Torneo</h3>
        <form onSubmit={handleSubmit}>
            {/* NOMBRE DEL TORNEO */}
          <div className="form-group">            
            <label>Nombre del Torneo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

            {/* TIPOS DE TORNEO */}
          <div className="form-group">
            <label>Tipo de Torneo</label>
            <select
              value={status}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">Elige uno</option>
              <option value="activo">TCG</option>
              <option value="videojuegos">Video Juegos</option>
              <option value="juegosmesa">Juegos de Mesa</option>
              <option value="deporte">Deporte</option>
            </select>
          </div>

          <div className="form-group">            
            <label>Descripcion</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>

          <div className="form-group">            
            <label>Agreagar participantes</label>
            <input
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>


          

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Guardar</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateModal;
