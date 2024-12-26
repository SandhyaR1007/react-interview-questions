import React, { useState } from "react";
import GridSquare from "./GridSquare";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const BishopGrid = () => {
  const grid = new Array(8).fill(null);
  const [piecePosition, setPiecePosition] = useState([0, 0]);
  return (
    <DndProvider backend={HTML5Backend}>
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
    </DndProvider>
  );
};

export default BishopGrid;
