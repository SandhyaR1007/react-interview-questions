import React from "react";

const Square = ({ color, outerPos, innerPos }) => {
  return (
    <div className={`square ${color === 0 ? "darkBg" : "lightBg"}`}>
      {getElement(outerPos, innerPos)}
    </div>
  );
};

export default Square;
const getElement = (outerPos, innerPos) => {
  if (outerPos === 0) return whites[innerPos];
  if (outerPos === 7) return blacks[innerPos];
  if (outerPos === 1) return whitePawn;
  if (outerPos === 6) return blackPawn;
};

const whites = {
  0: "♖",
  7: "♖",
  1: "♘",
  6: "♘",
  2: "♗",
  5: "♗",
  4: "♔",
  3: "♕",
};
const blackPawn = "♟";
const whitePawn = "♙";
const blacks = {
  0: "♜",
  7: "♜",
  1: "♞",
  6: "♞",
  2: "♝",
  5: "♝",
  4: "♛",
  3: "♚",
};
