import React, { useState } from "react";
import "../../styles/chess.css";
import Square from "./Square";

const ChessBoard = () => {
  const [chessState, setChessState] = useState([
    // 0th row (White pieces)
    ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"],
    // 1st row (White pawns)
    ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
    // 2nd-5th rows (Empty)
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    // 6th row (Black pawns)
    ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
    // 7th row (Black pieces)
    ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ]);
  const [hoveredStates, setHoveredStates] = useState([]);

  return (
    <div className="board">
      {chessState.map((arr, idx) => (
        <div
          style={{ display: "flex" }}
          key={`${idx}_outer`}
          onMouseOver={(e) => {
            const p = Number(e.target.getAttribute("data-innerpos"));
            let arr = [...chessState];
            const validMoves = getValidMoves(
              chessState[idx][p],
              idx,
              p,
              chessState
            );
            // console.log(validMoves);
            setHoveredStates(validMoves);
          }}
          onClick={(e) => {
            const p = Number(e.target.getAttribute("data-innerpos"));
            let arr = [...chessState];
            const validMoves = getValidMoves(
              chessState[idx][p],
              idx,
              p,
              chessState
            );
            //  console.log(validMoves);
            arr[validMoves[0].outerPos][validMoves[0].innerPos] =
              chessState[idx][p];
            arr[idx][p] = null;
            setChessState(arr);
          }}
        >
          {arr.map((ele, index) => (
            <Square
              hoveredStates={hoveredStates}
              outerPos={idx}
              innerPos={index}
              ele={ele}
              key={`${idx + index}_inner`}
              color={(idx + index) % 2 === 0 ? 0 : 1}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;

function getValidMoves(element, outerPos, innerPos, chessState) {
  let validMoves = [];
  switch (element) {
    case "♙":
      if (chessState[outerPos + 1][innerPos] === null) {
        validMoves.push({ outerPos: outerPos + 1, innerPos });
      }
      if (chessState[outerPos + 1][innerPos - 1] != null) {
        validMoves.push({ outerPos: outerPos + 1, innerPos: innerPos - 1 });
      }
      if (chessState[outerPos + 1][innerPos + 1] != null) {
        validMoves.push({ outerPos: outerPos + 1, innerPos: innerPos + 1 });
      }
      return validMoves;

      break;

    default:
      break;
  }
}
