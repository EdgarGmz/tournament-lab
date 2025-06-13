// HOOKS
import { useState } from 'react';

// CSS
import '../../css/searchmodal.css';

const SearchModal = ({ isOpen, onClose }) => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscar Torneo:", { nombre, fecha, status });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h3>Buscar Torneo</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre del Torneo</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Fecha</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Estado</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="activo">Activos</option>
              <option value="completado">Completado</option>
              <option value="cancelado">Cancelado</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn btn-primary">Buscar</button>
            <button type="button" className="btn btn-secondary" onClick={onClose}>Cerrar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchModal;
