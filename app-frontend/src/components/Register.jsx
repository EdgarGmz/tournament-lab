import { Link } from "react-router-dom";
const Register = () => {
    return (
        <div className="form-register">
            <h1>Crea una nueva cuenta</h1>

            {/* Nombre de usuario */}
            <input
                type="text"
                placeholder='Nombre de usuario'
                required
            />
            {/* Correo electrónico */}
            <input
                type="email"
                placeholder='Correo electrónico'
                required
            />
            {/* Contraseña */}
            <input
                type="password"
                placeholder='Contraseña'
                required
            />
            {/* Confirmar contraseña */}
            <input
                type="password"
                placeholder='Confirmar contraseña'
                required
            />
            {/* Botón de registro */}
            <button type='submit'>Registrar</button>

            {/* Ya tienes cuenta? */}
            <p>¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link> </p>

            {/* Olvidaste tu contraseña */}
            <p><a href="/forgot-password">Olvidaste tu contraseña?</a></p>

            {/* Términos y condiciones */}
            <p>Al registrarte, aceptas nuestros <a href="/terms">términos y condiciones</a>.</p>

            {/* Política de privacidad */}
            <p>Consulta nuestra <a href="/privacy-policy">política de privacidad</a>.</p>

            {/* Soporte técnico */}
            <p>Si necesitas ayuda, contacta a nuestro <a href="/support">soporte técnico</a>.</p>

            {/* Redes sociales */}
        </div>
    );
}

export default Register;
