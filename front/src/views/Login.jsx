import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const passwordInputRef = useRef(null);

    const [usuario, setUsuario] = useState(location.state?.username || '');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (location.state?.username && passwordInputRef.current) {
            passwordInputRef.current.focus();
        }
    }, [location.state?.username]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL;
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: usuario, password }),
            });

            if (response.ok) {
                const { token } = await response.json();
                localStorage.setItem('token', token);
                localStorage.setItem('user_name', usuario);
                alert('Login Correcto!');
                navigate('/dashboard');
            } else {
                const errorText = await response.text();
                alert(`Error: ${errorText || 'Credenciales Incorrectas'}`);
            }
        } catch (error) {
            alert('No se pudo conectar con el Servidor. Intentelo mas tarde.', error.errorText);
        }
    };

    return (
        <div className='auth-container'>
            <div className='auth-card'>
                <form onSubmit={handleSubmit}>
                    <div className='auth-header center' onClick={() => navigate('/')}>
                        <img src={logo} alt='logo' />
                        <h2 className='text-center'>Iniciar Sesión</h2>
                    </div>
                    <div className="input-group">
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
                            onClick={() => setShowPassword(s => !s)}
                            className="toggle-password"
                            title={showPassword ? 'Ocultar' : 'Mostrar'}
                        >
                            <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                        </button>
                    </div>
                    <div>
                        <button type="submit" className="btn-submit">Ingresar</button>
                    </div>
                    <hr />
                    <p>
                        ¿No tienes cuenta? <a href="/register">Crea una</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
