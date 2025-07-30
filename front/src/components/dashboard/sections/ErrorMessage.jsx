import { RiErrorWarningLine } from "react-icons/ri";

const ErrorMessage = ({ message }) => {
    return (
        <div className='error'>
            <RiErrorWarningLine/> {message}
        </div>
    );
}

export default ErrorMessage;

