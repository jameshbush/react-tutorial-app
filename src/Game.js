import React from "react";

import { GameBoard } from "./GameBoard";
import { GameInfo } from "./GameInfo";
import { calculateWinner } from "./gameUtils";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleSquareClick = (squareIndex) => {
    const { stepNumber, xIsNext, history } = this.state;
    const truncatedHistory = history.slice(0, stepNumber + 1);
    const current = truncatedHistory[truncatedHistory.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[squareIndex]) {
      return;
    }

    squares[squareIndex] = xIsNext ? "X" : "O";
    this.setState({
      history: [...truncatedHistory, { squares }],
      stepNumber: truncatedHistory.length,
      xIsNext: !xIsNext,
    });
  };

  handleHistClick = (stepNumber) => {
    const xIsNext = stepNumber % 2 === 0;
    this.setState({ history: [...this.state.history], stepNumber, xIsNext });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    return (
      <div className="game">
        <div className="game-board">
          <GameBoard
            squares={current.squares}
            onSquareClick={this.handleSquareClick}
          />
        </div>
        <div className="game-info">
          <GameInfo
            winner={winner}
            history={history}
            xIsNext={this.state.xIsNext}
            jumpTo={this.handleHistClick}
          />
        </div>
      </div>
    );
  }
}

export { Game };
