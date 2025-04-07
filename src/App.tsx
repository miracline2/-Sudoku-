// src/App.tsx
import React, { useState } from "react";
import { initialPuzzle, SudokuGrid } from "./data/puzzle";
import SudokuBoard from "./components/SudokuBoard";
import { isValidSudoku } from "./utils/validate";

const App: React.FC = () => {
  const [grid, setGrid] = useState<SudokuGrid>(JSON.parse(JSON.stringify(initialPuzzle)));
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleCellChange = (row: number, col: number, value: number | null) => {
    const newGrid = [...grid];
    newGrid[row][col] = { ...newGrid[row][col], value };
    setGrid(newGrid);
  };

  const checkSolution = () => {
    setIsCorrect(isValidSudoku(grid));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-center">
      <h1 className="text-2xl font-bold mb-4">🧠 Mini Sudoku (4x4)</h1>
      <SudokuBoard grid={grid} onCellChange={handleCellChange} />
      <button
        onClick={checkSolution}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
      >
        Check Solution
      </button>
      {isCorrect !== null && (
        <p className={`mt-4 text-lg font-semibold ${isCorrect ? "text-green-600" : "text-red-600"}`}>
          {isCorrect ? "✅ You solved it!" : "❌ Incorrect. Try again!"}
        </p>
      )}
    </div>
  );
};

export default App;
