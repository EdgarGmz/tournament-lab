// COMPONENTS
import { FcDisapprove } from "react-icons/fc";
// CSS
import '../css/label-participant.css';

const LabelParticipant = ({name, onClick}) => {
  return (
    <button className="container-participant" onClick={onClick}>
      {name} <FcDisapprove/>     
    </button>
  )
}

export default LabelParticipant