// Components
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define API_URL or import it from your config
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// CSS
import '../css/auth.css'

const Login = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSumbit = async (e) => {
        e.preventDefault()
        try{
            // Hacemos la petición POST a nuestro backend
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Enviamos al usuario la contraseña en el cuerpo de la petición
                body: JSON.stringify({
                    username: usuario,
                    password: password,
                })
            });               

            // Si la respuesta es exitosa (código 200-299)
            if(response.ok){
                const data = await response.json()
                // Aquí podrías guardar el token de autenticación (lo veremos después)
                console.log('Login exitoso: ', data)
                alert('Login Correcto!')

                // Nos rederigimos al dashboard
                navigate('/dashboard')
            } else{
                // Si hay un error en la respuesta (ej. credenciales incorrectas)
                const errorData = await response.json()
                console.log(`Error: ${errorData.message || 'Credenciales Incorrectas' }`)
            }
        }catch (error){
            // Si hay un error en la conexión de la API
            console.log(error.message)
            alert('No se pudo conectar con el Servidor. Intentelo mas tarde.')
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
