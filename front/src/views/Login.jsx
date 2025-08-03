// Hooks
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//Image
import logo from '../img/logo.png';

const Login = () => {
    const location = useLocation();

    const [usuario, setUsuario] = useState(location.state?.username || '')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    const passwordInputRef = useRef(null);

    useEffect(() => {
  // Si viene desde registro, enfoca el campo de contraseña
  if (location.state?.username && passwordInputRef.current) {
    passwordInputRef.current.focus();
  }
}, [location]);


    const handleSumbit = async (e) => {
        e.preventDefault()
        try{
            // Hacemos la petición POST a nuestro backend
            const API_URL = import.meta.env.VITE_API_URL;
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

                // Guardamos el token y el nombre del usuario en el almacenamiento local del servidor
                localStorage.setItem('token', data.token)
                localStorage.setItem('user_name', usuario)

                // Aquí podrías guardar el token de autenticación (lo veremos después)
                console.log('Login exitoso. Token: ', data.token)
                alert('Login Correcto!')

                // Nos rederigimos al dashboard
                navigate('/dashboard')
            } else{
                const errorText = await response.text()
                alert(`Error: ${errorText || 'Credenciales Incorrectas'}`)
                console.log(`Error: ${errorText || 'Credenciales Incorrectas'}`)
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
                <form  onSubmit={handleSumbit}>

                    <div className='auth-header center' onClick={() => navigate('/') }>
                        <img src={logo} alt='logo' />
                        <h2 className='text-center'>Iniciar Sesión</h2>
                    </div>

                    {/* Input de Usuario */}
                    <div className="input input-group">
                        <i className="fas fa-user icon" />
                        <input
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={e => setUsuario(e.target.value)}
                        required
                        className="form-input"
                        autoComplete='off'
                        />
                    </div>

                    {/* Input de Contraseña */}
                    <div className="input-group password-group">
                    <i className="fas fa-lock icon" />
                    <input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Contraseña"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        ref={passwordInputRef}
                        required
                        className="form-input"
                        autoComplete='off'
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                        className="toggle-password"
                        title={showPassword ? 'Ocultar' : 'Mostrar'}
                    >
                        {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
                    </button>
                    </div>


                    {/* Botón */}
                    <div>
                        <button type="submit" className="btn-submit">Ingresar</button>
                    </div>
                    <hr />
                    {/* Enlace para registro */}
                    <p>
                        ¿No tienes cuenta? <a href="/register">Crea una</a>
                    </p>
                </form> 
            </div>
        </div>   
    );

}

export default Login
