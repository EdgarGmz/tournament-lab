function Member({ name, role, img1, img2 }) {
  return (
    <div className="member-container">
      <div className="card">
        <div className="card-inner">
          
          {/* Frente */}
          <div className="card-face card-front">
            <img src={img1} alt={`Foto de ${name}`} />
            <div className="card-label">{name}</div>
          </div>

          {/* Atrás */}
          <div className="card-face card-back">
            <img src={img2} alt={`Foto de ${role}`} />
            <div className="card-label">{role}</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Member;
