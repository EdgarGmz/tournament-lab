import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Image
//Image
import logo from '../img/logo.png';


const Register = () => {
    // Creamos los estados para cada uno de los campos del formulario
    const[username, setUserName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[confirmPassword, setConfirmPassword] = useState('')

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    // Función para manejar el envío de formulario
    const handleSubmit = async (e) =>{
        e.preventDefault();
        
        const API_URL = import.meta.env.VITE_API_URL
        console.log("La URL de la API que se está usando es:", API_URL);
        
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
                username: username, // Se envía tal como el usuario lo ingresa
                email,
                password
            })
            })

            if(response.ok){
            alert('Registro Exitoso! Ahora puedes iniciar sesión.')
            navigate('/login', { state: { username}})
            }else{
            const errorData = await response.json()
            alert(`Error en el registro: ${errorData.message || 'No se pudo completar el registro'}`)
            }
        }catch (error){
            console.error('No se pudo conectar al servidor: ', error)
            alert('No se pudo conectar con el servidor. Intentalo mas tarde.')
        }
    }

    const getPasswordStrength = (password) => {
            let strength = 0;
            if(/[a-z]/.test(password)) strength++
            if(/[A-Z]/.test(password)) strength++
            if(/[0-9]/.test(password)) strength++
            if(/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++
            if(password.length >= 8) strength++
            return strength;
        }

        const getPasswordLabel = (strength) => {
            switch(strength) {
                case 0:
                case 1:
                    return { text: 'Segruidad: Baja', className: 'text-danger', barClass: 'bar-weak'};
                case 2:
                case 3:
                case 4:
                    return { text: 'Seguridad: Media', className: 'text-warning', barClass: 'bar-medium' };                
                case 5:
                    return { text: 'Seguridad: Alta', className: 'text-success', barClass: 'bar-strong' };
                default:
                    return { text: '' , className: '', barClass: '' };
            }
        }        

    const passwordStrength = getPasswordStrength(password)
    const passwordLabel = getPasswordLabel(passwordStrength);
    
    return (
        
        <div className="auth-container" >
            <div className="auth-card">
                <form onSubmit={handleSubmit}>

                   <div className='auth-header center' onClick={() => navigate('/') }>
                        <img src={logo} alt="logo" />
                        <h2 className='text-center'>Registrate!</h2>
                    </div>

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

                    <div className="input-group password-group">
                        <i className="fas fa-lock icon" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Contraseña"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
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
                    { password && (
                        <div className="password-strength-container">
                            <div className="password-strength">
                                <div className={`password-bar ${passwordLabel.barClass}`}></div>
                            </div>
                            <small className={passwordLabel.className}>{passwordLabel.text}</small>
                        </div>
                    )}

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

                    <button className="register" type="submit">Registrar</button>

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
