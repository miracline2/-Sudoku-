// src/components/Cell.tsx
import React from "react";
import { SudokuCell } from "../data/puzzle";

interface Props {
  cell: SudokuCell;
  row: number;
  col: number;
  onChange: (row: number, col: number, value: number | null) => void;
}

const Cell: React.FC<Props> = ({ cell, row, col, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    const num = val === "" ? null : parseInt(val);
    if (num === null || (num >= 1 && num <= 4)) {
      onChange(row, col, num);
    }
  };

  return cell.readOnly ? (
    <div className="w-12 h-12 border flex items-center justify-center font-bold bg-gray-200">
      {cell.value}
    </div>
  ) : (
    <input
      type="number"
      min={1}
      max={4}
      value={cell.value ?? ""}
      onChange={handleInputChange}
      className="w-12 h-12 border text-center text-lg"
    />
  );
};

export default Cell;
