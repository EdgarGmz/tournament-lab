import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="auth-container" >
            <div className="auth-card">
                <form>
                <h1 >Crea una nueva cuenta</h1>

                {/* Nombre de usuario */}
                <div >
                    <label>Nombre de usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        required
                    />
                </div>

                {/* Correo electrónico */}
                <div>
                    <label>Correo electrónico</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                    />
                </div>

                {/* Contraseña */}
                <div>
                    <label>Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        required
                    />
                </div>

                {/* Confirmar contraseña */}
                <div >
                    <label>Confirmar contraseña</label>
                    <input
                        type="password"
                        className="form-control"
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
