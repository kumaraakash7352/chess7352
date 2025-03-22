import { create } from 'zustand';
import { Board, Move, Piece, Position } from '../types/chess';
import { getValidMoves, makeMove, createInitialBoard } from '../utils/chess';

interface GameState {
  board: Board;
  selectedPosition: Position | null;
  currentPlayer: 'white' | 'black';
  validMoves: Position[];
  selectPiece: (position: Position) => void;
  movePiece: (to: Position) => void;
  resetGame: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
  board: createInitialBoard(),
  selectedPosition: null,
  currentPlayer: 'white',
  validMoves: [],

  selectPiece: (position: Position) => {
    const { board, currentPlayer } = get();
    const piece = board[position.y][position.x];

    if (piece && piece.color === currentPlayer) {
      const validMoves = getValidMoves(board, position);
      set({ selectedPosition: position, validMoves });
    } else {
      set({ selectedPosition: null, validMoves: [] });
    }
  },

  movePiece: (to: Position) => {
    const { board, selectedPosition, currentPlayer, validMoves } = get();
    
    if (!selectedPosition) return;
    
    const isValidMove = validMoves.some(move => move.x === to.x && move.y === to.y);
    
    if (isValidMove) {
      const newBoard = makeMove(board, { from: selectedPosition, to });
      set({
        board: newBoard,
        selectedPosition: null,
        validMoves: [],
        currentPlayer: currentPlayer === 'white' ? 'black' : 'white'
      });
    }
  },

  resetGame: () => {
    set({
      board: createInitialBoard(),
      selectedPosition: null,
      currentPlayer: 'white',
      validMoves: []
    });
  }
}));