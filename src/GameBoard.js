import React from "react";
import { GameSquare } from "./GameSquare";

function GameBoard({ squares, onSquareClick }) {
  return [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ].map((row) => (
    <div className="board-row">
      {row.map((squareIndex) => (
        <GameSquare
          value={squares[squareIndex]}
          onClick={() => onSquareClick(squareIndex)}
        />
      ))}
    </div>
  ));
}

export { GameBoard };
