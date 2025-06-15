// HOOKS
import { useState } from 'react';

// CSS
import '../../../css/settings-modal.css';

const SettingsModal = ({ isOpen, onClose }) => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmNewPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()

        if (newPassword !== confirmPassword) {
            alert('Las contraseñas no coinciden!')
            return
        }

        // TODO: Aquí la lógica para guardar la configuracion en el
        // LocalStorage, API, etc.
        onClose()
    };

    if (!isOpen) return null

    return (
        <div className="settings-backdrop">
            <div className="settings-modal">
                <h3 className="settings-title">Configuración de Cuenta</h3>

                <form onSubmit={handleSubmit}>
                {/* Usuario */}
                <div className="settings-group">
                    <label className="settings-label">Nombre de usuario</label>
                    <input
                    type="text"
                    className="settings-input"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                    />
                </div>

                {/* Correo */}
                <div className="settings-group">
                    <label className="settings-label">Correo electrónico</label>
                    <input
                    type="email"
                    className="settings-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                </div>

                {/* Nueva contraseña */}
                <div className="settings-group">
                    <label className="settings-label">Nueva contraseña</label>
                    <input
                    type="password"
                    className="settings-input"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>

                {/* Confirmar contraseña */}
                <div className="settings-group">
                    <label className="settings-label">Confirmar contraseña</label>
                    <input
                    type="password"
                    className="settings-input"
                    value={confirmPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                </div>

                {/* Acciones */}
                <div className="settings-actions">
                    <button
                    type="button"
                    className="settings-btn cancel"
                    onClick={onClose}
                    >
                    Cancelar
                    </button>
                    <button type="submit" className="settings-btn save">
                    Guardar Cambios
                    </button>
                </div>
                </form>
            </div>
        </div>       
    );
}

export default SettingsModal;
