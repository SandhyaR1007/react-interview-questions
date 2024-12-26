import React, { useEffect, useState } from "react";
import { ItemTypes } from "../../utils/helper";
import { useDrop } from "react-dnd";
import Bishop from "./Bishop";
import { useBishopPosition } from "../../hooks/useBishopPosition";

const GridSquare: React.FC<GridSquareProps> = ({
  outerIndex,
  innerIndex,
  piecePosition,
  setPiecePosition,
}) => {
  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.PIECE,
      drop: () => setPiecePosition([outerIndex, innerIndex]),
      collect: (monitor) => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [outerIndex, innerIndex]
  );
  const [isPosition, setIsPosition] = useState(false);

  const bishopPositions = useBishopPosition(piecePosition);

  useEffect(() => {
    const isPos = bishopPositions.find(
      ([a, b]) => a == outerIndex && b === innerIndex
    );
    setIsPosition(isPos ? true : false);
  }, [bishopPositions, outerIndex, innerIndex]);

  return (
    <div
      ref={drop}
      className={`square ${
        (innerIndex + outerIndex) % 2 == 0 ? "darkBg" : "lightBg"
      } ${isPosition ? "hoveredBg" : ""}`}
      style={{ position: "relative" }}
    >
      {outerIndex === piecePosition[0] && innerIndex === piecePosition[1] ? (
        <Bishop />
      ) : null}
      {isOver && <div className="pieceOverlay" />}
    </div>
  );
};

export default GridSquare;

interface GridSquareProps {
  outerIndex: number;
  innerIndex: number;
  piecePosition: [number, number];
  setPiecePosition: React.Dispatch<React.SetStateAction<[number, number]>>;
}
