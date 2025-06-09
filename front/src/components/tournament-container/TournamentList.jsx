import { tournaments } from "../../constants";
import TournamentCard from "./TournamentCard";

const TournamentList = () => {
    
    
    return (
        <div className="container mt-5">
            <h2 className="text-center text-light mb-4">Torneos Actuales</h2>
            <div className="row"> 
                {tournaments.map((t, index) => (
                    <div key={index} className="col-md-4 mb-4">
                
                        {/* Aquí se renderiza el torneo */}
                        <TournamentCard
                            name={t.name}
                            status={t.status}
                            participants={t.participants}
                            description={t.description}
                        />

                    </div>
                ))}
            </div>
        </div>
    );
}

export default TournamentList;
