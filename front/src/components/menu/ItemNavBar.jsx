// CSS
import '../../css/itemNavBar.css';

//Hooks
import { Link } from 'react-router-dom';

const ItemNavBar = ({ icon: Icon, name, link }) => {
    return (
        <Link to={ link } className="item-navbar">
            <Icon size={20} />
            <p>{ name }</p>
        </Link>
    );
}

export default ItemNavBar;
