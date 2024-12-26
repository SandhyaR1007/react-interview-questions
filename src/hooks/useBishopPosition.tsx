import { useEffect, useState } from "react";
import { getPositions } from "../utils/helper";

export const useBishopPosition = (piecePosition: [number, number]) => {
  const [bishopPositions, setBishopPositions] = useState<any>([]);
  function positionHandler(outerIndex: number, innerIndex: number) {
    let result: any[] = [];
    result.push(...getPositions(innerIndex, outerIndex, -1, -1)); //top left
    result.push(...getPositions(innerIndex, outerIndex, -1, 1)); // top right
    result.push(...getPositions(innerIndex, outerIndex, 1, -1)); // bottom left
    result.push(...getPositions(innerIndex, outerIndex, 1, 1)); // bottom right

    setBishopPositions(result);
  }
  useEffect(() => {
    positionHandler(piecePosition[0], piecePosition[1]);
  }, [piecePosition]);
  return bishopPositions;
};
