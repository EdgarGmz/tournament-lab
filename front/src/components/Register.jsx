import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <form className="bg-light p-4 rounded shadow-sm" style={{ maxWidth: '500px', width: '100%' }}>
                <h1 className="text-center text-primary mb-4">Crea una nueva cuenta</h1>

                {/* Nombre de usuario */}
                <div className="mb-3">
                    <label className="form-label">Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nombre de usuario"
                        required
                    />
                </div>

                {/* Correo electrónico */}
                <div className="mb-3">
                    <label className="form-label">Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Correo electrónico"
                        required
                    />
                </div>

                {/* Contraseña */}
                <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Contraseña"
                        required
                    />
                </div>

                {/* Confirmar contraseña */}
                <div className="mb-3">
                    <label className="form-label">Confirmar contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirmar contraseña"
                        required
                    />
                </div>

                {/* Botón de registro */}
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Registrar</button>
                </div>

                <hr />

                {/* Enlaces y ayuda */}
                <p className="mt-3 text-center">
                    ¿Ya tienes cuenta? <Link to="/">Inicia sesión</Link>
                </p>
                <p className="text-center">
                    <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                </p>
                <p className="text-center small">
                    Al registrarte, aceptas nuestros <a href="/terms">términos y condiciones</a>.
                </p>
                <p className="text-center small">
                    Consulta nuestra <a href="/privacy-policy">política de privacidad</a>.
                </p>
                <p className="text-center small">
                    ¿Necesitas ayuda? Contacta a <a href="/support">soporte técnico</a>.
                </p>
            </form>
        </div>
    );
}

export default Register;
