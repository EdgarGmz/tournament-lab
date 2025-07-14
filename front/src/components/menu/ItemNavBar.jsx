import '../../css/itemNavBar.css';

const ItemNavBar = ({ icon: Icon, name, onClick }) => {
  return (
    <span onClick={onClick} className='item-navbar'>
        <Icon size = {30}/>
        <span className='item-label'> {name} </span>
    </span>
  );
};

export default ItemNavBar;
