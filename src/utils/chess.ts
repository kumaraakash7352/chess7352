import { Board, Piece, Position, PieceType } from '../types/chess';

export function createInitialBoard(): Board {
  const board: Board = Array(8).fill(null).map(() => Array(8).fill(null));
  
  // Place pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = { type: 'pawn', color: 'black' };
    board[6][i] = { type: 'pawn', color: 'white' };
  }

  // Place other pieces
  const pieces: PieceType[] = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
  pieces.forEach((piece, i) => {
    board[0][i] = { type: piece, color: 'black' };
    board[7][i] = { type: piece, color: 'white' };
  });

  return board;
}

export function getValidMoves(board: Board, position: Position): Position[] {
  const piece = board[position.y][position.x];
  if (!piece) return [];

  const moves: Position[] = [];
  const { x, y } = position;

  switch (piece.type) {
    case 'pawn':
      const direction = piece.color === 'white' ? -1 : 1;
      const startRank = piece.color === 'white' ? 6 : 1;

      // Forward move
      if (!board[y + direction]?.[x]) {
        moves.push({ x, y: y + direction });
        // Double move from starting position
        if (y === startRank && !board[y + 2 * direction]?.[x]) {
          moves.push({ x, y: y + 2 * direction });
        }
      }

      // Captures
      [-1, 1].forEach(dx => {
        const newX = x + dx;
        const newY = y + direction;
        if (board[newY]?.[newX]?.color !== piece.color) {
          moves.push({ x: newX, y: newY });
        }
      });
      break;

    case 'rook':
      // Horizontal and vertical moves
      [[-1, 0], [1, 0], [0, -1], [0, 1]].forEach(([dx, dy]) => {
        let newX = x + dx;
        let newY = y + dy;
        while (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
          if (!board[newY][newX]) {
            moves.push({ x: newX, y: newY });
          } else if (board[newY][newX]?.color !== piece.color) {
            moves.push({ x: newX, y: newY });
            break;
          } else {
            break;
          }
          newX += dx;
          newY += dy;
        }
      });
      break;

    // Add other piece movement logic here
    // This is a simplified version - you'd want to add complete movement rules for all pieces
  }

  return moves.filter(move => 
    move.x >= 0 && move.x < 8 && move.y >= 0 && move.y < 8
  );
}

export function makeMove(board: Board, { from, to }: { from: Position; to: Position }): Board {
  const newBoard = board.map(row => [...row]);
  newBoard[to.y][to.x] = newBoard[from.y][from.x];
  newBoard[from.y][from.x] = null;
  return newBoard;
}