// src/utils/validate.ts
import { SudokuGrid } from "../data/puzzle";

export const isValidSudoku = (grid: SudokuGrid): boolean => {
  const size = 4;

  const isUnique = (nums: (number | null)[]) => {
    const filtered = nums.filter((n) => n !== null);
    return new Set(filtered).size === filtered.length;
  };

  // Check rows
  for (let i = 0; i < size; i++) {
    const row = grid[i].map((cell) => cell.value);
    if (!isUnique(row)) return false;
  }

  // Check columns
  for (let i = 0; i < size; i++) {
    const col = grid.map((row) => row[i].value);
    if (!isUnique(col)) return false;
  }

  // Check 2x2 subgrids
  for (let r = 0; r < size; r += 2) {
    for (let c = 0; c < size; c += 2) {
      const box = [
        grid[r][c].value,
        grid[r][c + 1].value,
        grid[r + 1][c].value,
        grid[r + 1][c + 1].value,
      ];
      if (!isUnique(box)) return false;
    }
  }

  return true;
};
