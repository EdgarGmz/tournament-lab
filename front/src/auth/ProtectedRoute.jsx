import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    // Comprobamos si existe el token en el localStorage
    const token = localStorage.getItem('token')

    if (!token) {
        return <Navigate to = "/" replace/>
    }

    // Si hay un token, le permitimos ver la página que quería (el 'Outlet')
    return <Outlet />
}

export default ProtectedRoute