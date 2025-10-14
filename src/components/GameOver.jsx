export default function GameOver({ winner, onRematch }) {
    return (
        <div id="game-over">
            <h2>GameOver</h2>
            { winner && <p>{winner} won!</p>}
            {!winner && <p>DRAW!</p>}
            <p><button onClick={onRematch}>Rematch!</button></p>
        </div>
    )
}