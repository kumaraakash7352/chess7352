import React from 'react';
import { ChessBoard } from './components/ChessBoard';
import { GameInfo } from './components/GameInfo';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">React Chess</h1>
      <ChessBoard />
      <GameInfo />
    </div>
  );
}

export default App;