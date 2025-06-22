// HOOKS
import { useState } from 'react'

// COMPONENTS

// CSS
import '../../../css/settings-section.css'

const SettingsSection = () => {
    const [ userName, setUserName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")
    const [confirmNewPassword, setConfirmNewPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (newPassword !== confirmNewPassword) {
            alert('Las contraseñas no coinciden!')
            return
        }
        console.log("Guardar configuración: ", { userName, email, newPassword})
    }
    
    return (
        <div className='section-container'>
            <h3 className='settings-title'>Configuración de Cuenta</h3>
            <form onSubmit={handleSubmit}>
                
                {/* Nombre del usuario */}
                <div className='settings-group'>
                    <label className='settings-label'> Nombre del usuario: </label>
                    <input
                        type='text'
                        className='settings-input'
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                        required
                    />
                </div>

                {/* Correo electrónico */}
                <div className='settings-group'>
                    <label className='settings-label'> Correo electrónico </label>
                    <input
                        type='email'
                        className='settings-input'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        required
                    />
                </div>

                {/* Nueva Contraseña */}
                <div className='settings-group'>
                    <label className='settings-label'> Nueva contraseña: </label>
                    <input
                        type='email'
                        className='settings-input'
                        value={ newPassword}
                        onChange={ (e) => { setNewPassword(e.target.value) } }
                        required
                    />
                </div>

                {/* Confirmar Contraseña */}
                <div className='settings-group'>
                    <label className='settings-label'> Confirmar electrónico </label>
                    <input
                        type='email'
                        className='settings-input'
                        value={email}
                        onChange={ (e) => { setConfirmNewPassword(e.target.value) } }
                        required
                    />
                </div>

                {/* Butones */}
                <div className='settings-action'>
                    <button type='submit' className='settings-btn save'> Guardar Cambios </button>
                    <button type='submit' className='settings-btn save'> Cancelar </button>
                </div>
            </form>
        </div>
    )
}

export default SettingsSection

