import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        // Evita recargar la pagina
        e.preventDefault()

        // Lógica básica simulada (luego conecta a la API)
        if (usuario === 'admin' && password === 'Admin123') {
            alert('Login correcto')
            navigate('/home')
        } else {
            alert('Login incorrecto')
        }
    }

    return (
        <form onSubmit={handleSumbit} className='login-form'>
            <h2>Iniciar Sesión</h2>

            {/* Input de Usaurio */}
            <input
                type="text"
                placeholder='Usuario'
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
            />

            {/* Input de password */}
            <input
                type="password"
                placeholder='Contraseña'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            
            {/* Botón de Iniciar Sesión */}
            <button type='submit'>Ingresar</button>

            {/* Si no cuentas con una cuenta, creala */}
            <p>¿No tienes cuenta? <a href="/register">Crea una</a></p>

            {/* Olvidaste tu contraseña */}


        </form>
    )

}
