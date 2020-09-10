import React from "react";

const GameInfo = ({ winner, history, xIsNext, jumpTo }) => [
  winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`,
  history.map((step, i) => (
    <li key={i}>
      <button onClick={() => jumpTo(i)}>
        {i === 0 ? `Go to game start` : `Go to move #${i}`}
      </button>
    </li>
  )),
];

export { GameInfo };
