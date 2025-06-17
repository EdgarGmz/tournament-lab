// Components
import TournamentCard from "./TournamentCard";

const Container = () => {
    return (
        <div>
            <TournamentCard
                name="Magic"
                status="Completado"
                participants="Muchos"
                description="Jeugo de Comandante"
                date="16 de Junio 2025"
                champion="Edgar"
            />
            
        </div>
    );
}

export default Container;
