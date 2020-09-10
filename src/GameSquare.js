import React from "react";

const GameSquare = ({ onClick, value }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

export { GameSquare };
