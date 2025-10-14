export default function Scores({ turns }) {
    return (
        <ol id="log">
            {turns.map(turn => (
                <li key={`${turn.square.row}${turn.square.col}`}>
                    {turn.player} selected in cell({turn.square.row + 1}, {turn.square.col + 1})
                </li>
            ))}
        </ol>
    )
}