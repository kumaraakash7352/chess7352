import React from 'react';
import { Piece } from '../types/chess';
import { Crown, Cross, ChevronRight as ChessKnight, Parentheses as ChessQueen, Check as ChessKing, CopyCheck as ChessBishop, BookCheck as ChessRook, Check as ChessPawn } from 'lucide-react';

const PieceIcons = {
  king: ChessKing,
  queen: ChessQueen,
  bishop: ChessBishop,
  knight: ChessKnight,
  rook: ChessRook,
  pawn: ChessPawn,
};

interface ChessPieceProps {
  piece: Piece;
}

export function ChessPiece({ piece }: ChessPieceProps) {
  const Icon = PieceIcons[piece.type];
  
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <Icon
        className={`w-8 h-8 ${piece.color === 'white' ? 'text-white' : 'text-black'}`}
        strokeWidth={1.5}
      />
    </div>
  );
}