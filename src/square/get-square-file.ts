import { File, Square } from "../types";

/**
 * Returns the file of the square.
 * @returns The file of the square.
 */
export function getSquareFile(square: Square): File {
  return square[0] as File;
}
