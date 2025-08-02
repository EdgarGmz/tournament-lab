    // HOOKS
    import { useEffect, useState } from 'react';

    function shuffleArray(array) {
        return [...array].sort(() => Math.random() - 0.5);
    }

    function TournamentBracket({ participants, onFinalize }) {
        const [rounds, setRounds] = useState([]);
        const [currentRoundIndex, setCurrentRoundIndex] = useState(0);

        // Inicializar primera ronda
        useEffect(() => {
            if (participants.length >= 2) {
                const shuffled = shuffleArray(participants);
                const matches = [];
                for (let i = 0; i < shuffled.length; i += 2) {
                    const p1 = shuffled[i];
                    const p2 = shuffled[i + 1] || null; // En caso de impar
                    matches.push({ p1, p2, winner: null });
                }
                setRounds([{ matches }]);
            }
        }, [participants]);

        const handleSelectWinner = (matchIndex, selected) => {
            const updatedRounds = [...rounds];
            const currentMatches = [...updatedRounds[currentRoundIndex].matches];
            currentMatches[matchIndex] = { ...currentMatches[matchIndex], winner: selected };
            updatedRounds[currentRoundIndex].matches = currentMatches;
            setRounds(updatedRounds);
        }

        const handleNextRound = () => {
            const current = rounds[currentRoundIndex];
            const winners = current.matches.map(m => m.winner).filter(Boolean);
            if (winners.length < current.matches.length) {
                alert('Selecciona todos los ganadores primero');
                return;
            }
            if (winners.length === 1) {
                const champion = winners[0]
                if (onFinalize) {
                    onFinalize(champion) // <- Llama a la función callback con el campeón
                }
                return; // Torneo finalizado
            }
            const newMatches = [];
            for (let i = 0; i < winners.length; i += 2) {
                const p1 = winners[i];
                const p2 = winners[i + 1] || null;
                newMatches.push({ p1, p2, winner: null });
            }
            setRounds([...rounds, { matches: newMatches }]);
            setCurrentRoundIndex(currentRoundIndex + 1);
        };

        const currentRound = rounds[currentRoundIndex];

        return (
            <div className="bracket-container">
                <h3>Ronda {currentRoundIndex + 1}</h3>
                {currentRound && currentRound.matches.map((match, idx) => (
                    <div key={idx} className="match">
                        <button
                            className={match.winner === match.p1 ? 'winner' : ''}
                            onClick={() => handleSelectWinner(idx, match.p1)}
                        >
                            {match.p1}
                        </button>
                        <span>vs</span>
                        {match.p2 ? (
                            <button
                                className={match.winner === match.p2 ? 'winner' : ''}
                                onClick={() => handleSelectWinner(idx, match.p2)}
                            >
                                {match.p2}
                            </button>
                        ) : (
                            <span className="bye">(bye)</span>
                        )}
                    </div>
                ))}

                {currentRound && currentRound.matches.every(m => m.winner) && (
                    <button className="next-round" onClick={handleNextRound}>
                        {currentRound.matches.length === 1 ? 'Finalizar Torneo' : 'Siguiente Ronda'}
                    </button>
                )}

                {rounds.length > 0 &&
                    rounds[rounds.length - 1].matches.length === 1 &&
                    rounds[rounds.length - 1].matches[0].winner && (
                        <h2>🏆 Campeón: {rounds[rounds.length - 1].matches[0].winner}</h2>
                    )}
            </div>
        );
    }

    export default TournamentBracket;
