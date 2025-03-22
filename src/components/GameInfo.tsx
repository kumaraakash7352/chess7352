import React from 'react';
import { useGameStore } from '../store/gameStore';
import { RotateCcw } from 'lucide-react';

export function GameInfo() {
  const { currentPlayer, resetGame } = useGameStore();

  return (
    <div className="flex items-center justify-between w-full max-w-[600px] mt-4 px-4 py-3 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${
          currentPlayer === 'white' ? 'bg-white border border-black' : 'bg-black'
        }`} />
        <span className="text-lg font-medium capitalize">
          {currentPlayer}'s turn
        </span>
      </div>
      
      <button
        onClick={resetGame}
        className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        <span>Reset Game</span>
      </button>
    </div>
  );
}