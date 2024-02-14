import { Square } from "../types";
import { getVectorBetweenSquares } from "./get-vector-between-squares";

/**
 * The distance between two squares on the chessboard with no diagonal moves. This is the number of
 * squares a rook would have to move to get from one square to another. In mathematical terms, this
 * is known as the [taxicab distance or Manhattan
 * distance](https://en.wikipedia.org/wiki/Taxicab_geometry).
 *
 * @param square1 The first square.
 * @param square2 The second square.
 * @returns This distance between the two squares with no diagonal moves.
 */
export function distanceWithoutDiagonals(square1: Square, square2: Square): number {
  const vector = getVectorBetweenSquares(square1, square2);
  return Math.abs(vector[0]) + Math.abs(vector[1]);
}
