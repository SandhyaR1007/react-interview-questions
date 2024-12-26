import React, { useEffect, useState } from "react";
import { getPositions } from "../../utils/helper";

const GridSquare: React.FC<GridSquareProps> = ({
  outerIndex,
  innerIndex,
  bishopPositions,
  setBishopPositions,
}) => {
  const [isPosition, setIsPosition] = useState(false);
  useEffect(() => {
    const isPos = bishopPositions.find(
      ([a, b]) => a == outerIndex && b === innerIndex
    );
    setIsPosition(isPos ? true : false);
  }, [bishopPositions]);

  function clickHandler(innerIndex: number, outerIndex: number) {
    let result: any[] = [];
    result.push(...getPositions(innerIndex, outerIndex, -1, -1)); //top left
    result.push(...getPositions(innerIndex, outerIndex, -1, 1)); // top right
    result.push(...getPositions(innerIndex, outerIndex, 1, -1)); // bottom left
    result.push(...getPositions(innerIndex, outerIndex, 1, 1)); // bottom right

    setBishopPositions(result);
  }

  return (
    <div
      onClick={() => clickHandler(innerIndex, outerIndex)}
      className={`square ${
        (innerIndex + outerIndex) % 2 == 0 ? "darkBg" : "lightBg"
      } ${isPosition ? "hoveredBg" : ""}`}
      style={{
        fontSize: "1.5rem",
      }}
    ></div>
  );
};

export default GridSquare;

interface GridSquareProps {
  outerIndex: number;
  innerIndex: number;
  bishopPositions: any[];
  setBishopPositions: React.Dispatch<React.SetStateAction<any>>;
}
