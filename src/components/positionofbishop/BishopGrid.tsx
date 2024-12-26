import React, { useState } from "react";
import GridSquare from "./GridSquare";

const BishopGrid = () => {
  const grid = new Array(8).fill(null);
  const [piecePosition, setPiecePosition] = useState([0, 0]);
  return (
    <div className="board">
      {grid.map((g, outerIndex) => (
        <div style={{ display: "flex" }} key={outerIndex}>
          {grid.map((_, innerIndex) => (
            <GridSquare
              key={innerIndex + outerIndex}
              outerIndex={outerIndex}
              innerIndex={innerIndex}
              piecePosition={piecePosition}
              setPiecePosition={setPiecePosition}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BishopGrid;
