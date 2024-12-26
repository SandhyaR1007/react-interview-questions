import React, { useState } from "react";
import GridSquare from "./GridSquare";

const BishopGrid = () => {
  const grid = new Array(8).fill(null);
  const [bishopPositions, setBishopPositions] = useState([]);
  return (
    <div className="board">
      {grid.map((g, outerIndex) => (
        <div style={{ display: "flex" }} key={outerIndex}>
          {grid.map((_, innerIndex) => (
            <GridSquare
              key={innerIndex + outerIndex}
              outerIndex={outerIndex}
              innerIndex={innerIndex}
              bishopPositions={bishopPositions}
              setBishopPositions={setBishopPositions}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default BishopGrid;
