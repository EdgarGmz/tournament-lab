
const UserCard = ({userName, userImage}) => {
    return (
        <div className="card mb-3">
            <div className="card-body text-center bg-dark text-light">
                <img
                    src={userImage}
                    alt="User Avatar"
                    className="rounded-circle mb-3"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                />
                <h5 className="card-title">@{userName}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    );
}

export default UserCard;
