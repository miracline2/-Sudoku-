// src/components/SudokuBoard.tsx
import React from "react";
import Cell from "./Cell";
import { SudokuGrid } from "../data/puzzle";

interface Props {
  grid: SudokuGrid;
  onCellChange: (row: number, col: number, value: number | null) => void;
}

const SudokuBoard: React.FC<Props> = ({ grid, onCellChange }) => {
  return (
    <div className="grid grid-cols-4 gap-1 max-w-sm mx-auto">
      {grid.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            cell={cell}
            row={rowIndex}
            col={colIndex}
            onChange={onCellChange}
          />
        ))
      )}
    </div>
  );
};

export default SudokuBoard;
