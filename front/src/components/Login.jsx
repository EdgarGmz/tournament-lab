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
        <form onSubmit={handleSumbit} className='container mt-5 p-4 rounded shadow-sm bg-light'>
            <h2 className='mb-4 text-center text-primary'>Iniciar Sesión</h2>

            {/* Input de Usaurio */}
            <div className='mb-3'>
                <label className='form-label'>Usuario</label>
                <input
                    type="text"
                    placeholder='Ingresa tu usuario'
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                    className='form-control'/>
            </div>

            {/* Input de password */}
            <div className='mb-3'>
                <label className='form-label'>Password</label>
                <input
                    type="password"
                    placeholder='Ingresa tu contraseña'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='form-control'/>
            </div>
            
            {/* Botón de Iniciar Sesión */}
            <div className='d-grid'>
                <button type='submit' className='btn btn-primary'>Ingresar</button>
            </div>

            {/* Si no cuentas con una cuenta, creala */}
            <p className='mt-3 text-center'>
                ¿No tienes cuenta? <a href="/register">Crea una</a>
            </p>

        </form>
    )

}
