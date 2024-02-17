import {
  EMPTY_SQUARE_0x88,
  PIECE_0x88_TO_PIECE,
  SQUARE_TO_SQUARE_0x88,
} from "../internal/constants";
import { deriveFromFen } from "../internal/derive-from-fen";
import { Fen0x88 } from "../internal/types";
import { Piece, Square } from "../types";

/**
 * Returns the piece at the square.
 *
 * @param fen The FEN to parse.
 * @param square The square to get the piece from.
 * @returns The piece on the square, or `null` if there is no piece.
 */
export const getPiece = deriveFromFen((fen: Fen0x88, square: Square): Piece | null => {
  const piece0x88 = fen[0][SQUARE_TO_SQUARE_0x88[square]];
  return piece0x88 === EMPTY_SQUARE_0x88 ? null : PIECE_0x88_TO_PIECE.get(piece0x88)!;
});
