export type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
export type PieceColor = 'white' | 'black';

export interface Piece {
  type: PieceType;
  color: PieceColor;
  hasMoved?: boolean;
}

export interface Position {
  x: number;
  y: number;
}

export interface Move {
  from: Position;
  to: Position;
}

export type Board = (Piece | null)[][];