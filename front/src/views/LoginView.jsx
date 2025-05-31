import Login from "../components/Login";

export default function LoginView() {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-4 shadow rounded bg-white" style={{ width: "100%", maxWidth: "400px" }}>
                <Login />
            </div>
        </div>
    );
}
