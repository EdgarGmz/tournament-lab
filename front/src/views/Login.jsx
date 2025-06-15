// Components
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import '../css/auth.css'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        // Evita recargar la pagina
        e.preventDefault()

        // Lógica básica simulada (luego conecta a la API)
        if (usuario === 'admin' && password === 'Admin123') {
            alert('Login correcto')
            navigate('/dashboard')
        } else {
            alert('Login incorrecto')
        }
    }

    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <form onSubmit={handleSumbit}>
        <h2 >Iniciar Sesión</h2>

        {/* Input de Usuario */}
        <div >
            <label>Usuario</label>
            <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            className="form-input"
            />
        </div>

        {/* Input de Contraseña */}
        <div>
            <label>Password</label>
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
            />
        </div>

        {/* Botón */}
        <div>
            <button type="submit">Ingresar</button>
        </div>

        {/* Enlace para registro */}
        <p>
            ¿No tienes cuenta? <a href="/register">Crea una</a>
        </p>
        </form> 
            </div>
        </div>   
    )

}

export default Login
