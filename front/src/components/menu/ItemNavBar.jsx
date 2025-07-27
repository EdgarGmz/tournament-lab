// import '../../css/itemNavBar.css';

const ItemNavBar = ({ icon: Icon, name, onClick }) => { // eslint-disable-line no-unused-vars
  return (
    <span onClick={onClick} className='item-navbar'>
        <div className='item-icon'>
            <Icon size = {30} />
        </div>
        <span className='item-label'> {name} </span>
    </span>
  );
};

export default ItemNavBar;
