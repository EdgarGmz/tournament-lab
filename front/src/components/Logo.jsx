import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard');
    }

    return (
        <div>
            <img
                src="/img/logo1.png"
                alt="Logo"
                className="img-fluid rounded-circle"
                style={
                    {
                        cursor: 'pointer',
                        height: '120px',
                        width: '120px',
                        objectFit: 'cover',
                    }
                }
                onClick={handleClick}
                
            />
            
        </div>
    );
}

export default Logo;
