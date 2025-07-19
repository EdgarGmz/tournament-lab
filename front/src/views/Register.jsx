import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import '../css/auth2.css';


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

        // Validación de seguridad de la contraseña
        const validatePassword = (password) => {
            const hasUpperCase = /[A-Z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            const hasMinLength = password.length >= 8;
            return hasUpperCase && hasNumber && hasSpecialChar && hasMinLength;
        };

        if (!validatePassword(password)) {
            alert('La contraseña debe contener al menos una letra mayúscula, un número, un carácter especial y tener una longitud mínima de 8 caracteres.');
            return;
        }

        try{
            // Petición POST al endpoint de registro
            const apiUrl = `${import.meta.env.VITE_API_URL}`
            const response = await fetch(`${apiUrl}/auth/register`,{
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
                    <h1>Crea una nueva cuenta</h1>

                    <div className="input-group">
                        <i className="fas fa-user icon" />
                        <input
                        type="text"
                        placeholder="Nombre de usuario"
                        className="form-control"
                        onChange={e => setUserName(e.target.value)}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <i className="fas fa-envelope icon" />
                        <input
                        type="email"
                        placeholder="Correo electrónico"
                        className="form-control"
                        onChange={e => setEmail(e.target.value)}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <i className="fas fa-lock icon" />
                        <input
                        type="password"
                        placeholder="Contraseña"
                        className="form-control"
                        onChange={e => setPassword(e.target.value)}
                        required
                        />
                    </div>

                    <div className="input-group">
                        <i className="fas fa-lock icon" />
                        <input
                        type="password"
                        placeholder="Confirmar contraseña"
                        className="form-control"
                        onChange={e => setConfirmPassword(e.target.value)}
                        required
                        />
                    </div>

                    <button type="submit">Registrar</button>

                    <hr />

                    <p>
                        ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;
