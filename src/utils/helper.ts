export function getPositions(
  innerIndex: number,
  outerIndex: number,
  rowDir: number,
  colDir: number
) {
  let result: any[] = [];

  if (rowDir > 0) {
    for (
      let i = outerIndex + rowDir, j = innerIndex + colDir;
      i < 8;
      i += rowDir
    ) {
      result.push([i, j]);
      j += colDir;
    }
  } else {
    for (
      let i = outerIndex + rowDir, j = innerIndex + colDir;
      i >= 0;
      i += rowDir
    ) {
      result.push([i, j]);
      j += colDir;
    }
  }

  return result;
}
