export type SudokuCell = {
    value: number | null;
    readOnly: boolean;
  };
  
  export type SudokuGrid = SudokuCell[][];
  
  export const initialPuzzle: SudokuGrid = [
    [
      { value: 1, readOnly: true },
      { value: null, readOnly: false },
      { value: null, readOnly: false },
      { value: 4, readOnly: true },
    ],
    [
      { value: null, readOnly: false },
      { value: 3, readOnly: true },
      { value: 1, readOnly: true },
      { value: null, readOnly: false },
    ],
    [
      { value: null, readOnly: false },
      { value: 2, readOnly: true },
      { value: 4, readOnly: true },
      { value: null, readOnly: false },
    ],
    [
      { value: 3, readOnly: true },
      { value: null, readOnly: false },
      { value: null, readOnly: false },
      { value: 2, readOnly: true },
    ],
  ];
  