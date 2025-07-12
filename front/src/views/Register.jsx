import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    // Creamos los estados para cada uno de los campos del formulario
    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')
    const navigate = useNavigate()

    // Función para manejar el envío de formulario
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const API_URL = import.meta.env.VITE_API_URL
        console.log("La URL de la API que se está usando es:", import.meta.env.VITE_API_URL);
        
        // Validación simple: Las contraseñas deven coincidir
        if(password !== confirmPassword){
            alert('Las contraseñas no coinciden')
            return
        }

        try{
            // Petición POST al endpoint de registro
            const response = await fetch(`${API_URL}/auth/register`,{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            })

            if(response.ok){
                alert('Registro Exitoso! Ahora puedes iniciar sesión.')
                navigate('/login')
            }else{
                const errorData = await response.json()
                alert(`Error en el registro: ${errorData.message || 'No se pudo completar el registro'}`)
            }
        }catch (error){
            console.error('No se pudo conectar al servidor: ', error)
            alert('No se pudo conectar con el servidor. Intentalo mas tarde.')
        }
    }

    return (
        <div className="auth-container" >
            <div className="auth-card">
                <form onSubmit={handleSubmit}>
                <h1 >Crea una nueva cuenta</h1>

                {/* Nombre de usuario */}
                <div >
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                    />
                </div>

                {/* Correo electrónico */}
                <div>
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Contraseña */}
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Confirmar contraseña */}
                <div >
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Botón de registro */}
                <div>
                    <button type="submit">Registrar</button>
                </div>

                <hr />

                {/* Enlaces y ayuda */}
                <p>
                    ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                </p>
            </form>
            </div>
        </div>
    );
}

export default Register;
