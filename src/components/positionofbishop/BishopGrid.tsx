import React from "react";

const BishopGrid = () => {
  const grid = new Array(8).fill(null);
  return (
    <div className="board">
      {grid.map((g, outerIndex) => (
        <div style={{ display: "flex" }}>
          {grid.map((_, innerIndex) => (
            <div
              className={`square`}
              style={{
                backgroundColor:
                  (innerIndex + outerIndex) % 2 == 0 ? "black" : "white",
              }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BishopGrid;
