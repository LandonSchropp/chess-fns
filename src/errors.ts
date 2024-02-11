/**
 * The square in an operation was outside the bounds of a chessboard.
 */
export class OutOfBoundsError extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * The FEN string is invalid.
 */
export class InvalidFenError extends Error {
  constructor(message?: string | undefined) {
    super(message);
    this.name = this.constructor.name;
  }
}