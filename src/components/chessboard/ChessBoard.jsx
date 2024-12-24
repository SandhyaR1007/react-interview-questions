import React from "react";
import "../../styles/chess.css";
import Square from "./Square";

const ChessBoard = () => {
  let chessArr = new Array(8).fill(null);
  return (
    <div className="board">
      {chessArr.map((arr, idx) => (
        <div style={{ display: "flex" }} key={`${idx}_outer`}>
          {chessArr.map((ele, index) => (
            <Square
              outerPos={idx}
              innerPos={index}
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
