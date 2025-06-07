const MenuItemCard = ({ title, value, icon }) => {
    return (
        <div className=" card w-100 mb-2 shadow-sm bg-dark text-light" style={{padding: '0.5rem', fontSize: '0.9rem', cursor: 'pointer'}}>
            {/* Card content */}
            <div className="card-body py-2 px-3 d-flex align-items-center">
                <div className="mb-2">
                    <i className={`bi ${icon} fs-5 text-primary me-2`}></i>
                </div>
                <div className="flex-grow-1 align-items-center text-light">
                    <div className="fw-semibold"> {title} </div>
                    { value > 0 ? <div className="small text-light text-center"> {value}</div> : null }
                    
                </div>
            </div>
        </div>
    )
}

export default MenuItemCard;