import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Position } from '../types/chess';
import { ChessPiece } from './ChessPiece';
import clsx from 'clsx';

export function ChessBoard() {
  const { board, selectedPosition, validMoves, selectPiece, movePiece } = useGameStore();

  const handleSquareClick = (position: Position) => {
    if (selectedPosition) {
      movePiece(position);
    } else {
      selectPiece(position);
    }
  };

  const isValidMove = (position: Position) => {
    return validMoves.some(move => move.x === position.x && move.y === position.y);
  };

  return (
    <div className="w-[600px] h-[600px] bg-white rounded-lg shadow-xl p-4">
      <div className="grid grid-cols-8 gap-0 w-full h-full">
        {board.map((row, y) =>
          row.map((piece, x) => {
            const isLight = (x + y) % 2 === 0;
            const isSelected = selectedPosition?.x === x && selectedPosition?.y === y;
            const position = { x, y };
            const isValid = isValidMove(position);

            return (
              <div
                key={`${x}-${y}`}
                className={clsx(
                  'relative w-full h-full transition-colors duration-200',
                  isLight ? 'bg-amber-100' : 'bg-amber-800',
                  isSelected && 'bg-yellow-300',
                  isValid && 'after:absolute after:inset-0 after:bg-green-500 after:opacity-40'
                )}
                onClick={() => handleSquareClick({ x, y })}
              >
                {piece && <ChessPiece piece={piece} />}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}