import React, { useState } from "react";

const BishopGrid = () => {
  const grid = new Array(8).fill(null);
  const [bishopPositions, setBishopPositions] = useState([]);
  return (
    <div className="board">
      {grid.map((g, outerIndex) => (
        <div style={{ display: "flex" }}>
          {grid.map((_, innerIndex) => (
            <GridSquare
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

const GridSquare = ({
  outerIndex,
  innerIndex,
  bishopPositions,
  setBishopPositions,
}) => {
  function clickHandler(innerIndex, outerIndex) {
    let result: any[] = [];
    //top left
    for (let i = outerIndex - 1, j = innerIndex - 1; i >= 0; i--) {
      result.push([i, j]);
      j--;
    }
    //top right
    for (let i = outerIndex - 1, j = innerIndex + 1; i >= 0; i--) {
      result.push([i, j]);
      j++;
    }
    //bottom left
    for (let i = outerIndex + 1, j = innerIndex - 1; i < 8; i++) {
      result.push([i, j]);
      j--;
    }
    //bottom right
    for (let i = outerIndex + 1, j = innerIndex + 1; i < 8; i++) {
      result.push([i, j]);
      j++;
    }

    setBishopPositions(result);
  }
  const isPos = bishopPositions.find(
    ([a, b]) => a == outerIndex && b === innerIndex
  );
  return (
    <div
      onMouseOver={() => clickHandler(innerIndex, outerIndex)}
      className={`square ${
        (innerIndex + outerIndex) % 2 == 0 ? "darkBg" : "lightBg"
      } ${isPos ? "hoveredBg" : ""}`}
      style={{
        fontSize: "1.5rem",
      }}
    ></div>
  );
};
