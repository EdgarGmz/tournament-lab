import '../../../css/error-message.css';
const ErrorMessage = ({ message }) => {
    return (
        <div className='error'>
            {message}
        </div>
    );
}

export default ErrorMessage;
