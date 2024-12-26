import React, { useEffect, useState } from "react";
import { getPositions } from "../../utils/helper";

const GridSquare: React.FC<GridSquareProps> = ({
  outerIndex,
  innerIndex,
  piecePosition,
  setPiecePosition,
}) => {
  const [isPosition, setIsPosition] = useState(false);

  const [bishopPositions, setBishopPositions] = useState<any>([]);

  useEffect(() => {
    positionHandler(piecePosition[0], piecePosition[1]);
  }, [piecePosition]);

  useEffect(() => {
    const isPos = bishopPositions.find(
      ([a, b]) => a == outerIndex && b === innerIndex
    );
    setIsPosition(isPos ? true : false);
  }, [bishopPositions]);

  function positionHandler(outerIndex: number, innerIndex: number) {
    let result: any[] = [];
    result.push(...getPositions(innerIndex, outerIndex, -1, -1)); //top left
    result.push(...getPositions(innerIndex, outerIndex, -1, 1)); // top right
    result.push(...getPositions(innerIndex, outerIndex, 1, -1)); // bottom left
    result.push(...getPositions(innerIndex, outerIndex, 1, 1)); // bottom right

    setBishopPositions(result);
  }

  return (
    <div
      onClick={() => setPiecePosition([outerIndex, innerIndex])}
      className={`square ${
        (innerIndex + outerIndex) % 2 == 0 ? "darkBg" : "lightBg"
      } ${isPosition ? "hoveredBg" : ""}`}
    >
      {outerIndex === piecePosition[0] && innerIndex === piecePosition[1] ? (
        <span>♝</span>
      ) : null}
    </div>
  );
};

export default GridSquare;

interface GridSquareProps {
  outerIndex: number;
  innerIndex: number;
  piecePosition: any[];
  setPiecePosition: React.Dispatch<React.SetStateAction<any>>;
}
