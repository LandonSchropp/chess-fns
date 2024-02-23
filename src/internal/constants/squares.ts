import { BOARD_SIZE } from "../../constants";
import { invertToArray } from "../object";
import { BOARD_WIDTH_0x88 } from "./board";

export const A1_0x88 = 0x00;
export const A2_0x88 = 0x10;
export const A3_0x88 = 0x20;
export const A4_0x88 = 0x30;
export const A5_0x88 = 0x40;
export const A6_0x88 = 0x50;
export const A7_0x88 = 0x60;
export const A8_0x88 = 0x70;
export const B1_0x88 = 0x01;
export const B2_0x88 = 0x11;
export const B3_0x88 = 0x21;
export const B4_0x88 = 0x31;
export const B5_0x88 = 0x41;
export const B6_0x88 = 0x51;
export const B7_0x88 = 0x61;
export const B8_0x88 = 0x71;
export const C1_0x88 = 0x02;
export const C2_0x88 = 0x12;
export const C3_0x88 = 0x22;
export const C4_0x88 = 0x32;
export const C5_0x88 = 0x42;
export const C6_0x88 = 0x52;
export const C7_0x88 = 0x62;
export const C8_0x88 = 0x72;
export const D1_0x88 = 0x03;
export const D2_0x88 = 0x13;
export const D3_0x88 = 0x23;
export const D4_0x88 = 0x33;
export const D5_0x88 = 0x43;
export const D6_0x88 = 0x53;
export const D7_0x88 = 0x63;
export const D8_0x88 = 0x73;
export const E1_0x88 = 0x04;
export const E2_0x88 = 0x14;
export const E3_0x88 = 0x24;
export const E4_0x88 = 0x34;
export const E5_0x88 = 0x44;
export const E6_0x88 = 0x54;
export const E7_0x88 = 0x64;
export const E8_0x88 = 0x74;
export const F1_0x88 = 0x05;
export const F2_0x88 = 0x15;
export const F3_0x88 = 0x25;
export const F4_0x88 = 0x35;
export const F5_0x88 = 0x45;
export const F6_0x88 = 0x55;
export const F7_0x88 = 0x65;
export const F8_0x88 = 0x75;
export const G1_0x88 = 0x06;
export const G2_0x88 = 0x16;
export const G3_0x88 = 0x26;
export const G4_0x88 = 0x36;
export const G5_0x88 = 0x46;
export const G6_0x88 = 0x56;
export const G7_0x88 = 0x66;
export const G8_0x88 = 0x76;
export const H1_0x88 = 0x07;
export const H2_0x88 = 0x17;
export const H3_0x88 = 0x27;
export const H4_0x88 = 0x37;
export const H5_0x88 = 0x47;
export const H6_0x88 = 0x57;
export const H7_0x88 = 0x67;
export const H8_0x88 = 0x77;

/** A readonly object that converts a string square into its 0x88 representation. */
// prettier-ignore
export const SQUARE_TO_SQUARE_0x88 = {
  a8: A8_0x88, b8: B8_0x88, c8: C8_0x88, d8: D8_0x88, e8: E8_0x88, f8: F8_0x88, g8: G8_0x88, h8: H8_0x88,
  a7: A7_0x88, b7: B7_0x88, c7: C7_0x88, d7: D7_0x88, e7: E7_0x88, f7: F7_0x88, g7: G7_0x88, h7: H7_0x88,
  a6: A6_0x88, b6: B6_0x88, c6: C6_0x88, d6: D6_0x88, e6: E6_0x88, f6: F6_0x88, g6: G6_0x88, h6: H6_0x88,
  a5: A5_0x88, b5: B5_0x88, c5: C5_0x88, d5: D5_0x88, e5: E5_0x88, f5: F5_0x88, g5: G5_0x88, h5: H5_0x88,
  a4: A4_0x88, b4: B4_0x88, c4: C4_0x88, d4: D4_0x88, e4: E4_0x88, f4: F4_0x88, g4: G4_0x88, h4: H4_0x88,
  a3: A3_0x88, b3: B3_0x88, c3: C3_0x88, d3: D3_0x88, e3: E3_0x88, f3: F3_0x88, g3: G3_0x88, h3: H3_0x88,
  a2: A2_0x88, b2: B2_0x88, c2: C2_0x88, d2: D2_0x88, e2: E2_0x88, f2: F2_0x88, g2: G2_0x88, h2: H2_0x88,
  a1: A1_0x88, b1: B1_0x88, c1: C1_0x88, d1: D1_0x88, e1: E1_0x88, f1: F1_0x88, g1: G1_0x88, h1: H1_0x88,
} as const;

/** A readonly map that converts a 0x88 square to its string representation. */
export const SQUARE_0x88_TO_SQUARE = invertToArray(SQUARE_TO_SQUARE_0x88);

/** An array of all of the possible 0x88 squares. */
export const SQUARES_0x88 = Object.values(SQUARE_TO_SQUARE_0x88);

/** An empty 0x88 en passant square in a FEN. */
export const EMPTY_EN_PASSANT_SQUARE_0x88 = BOARD_WIDTH_0x88 * BOARD_SIZE;