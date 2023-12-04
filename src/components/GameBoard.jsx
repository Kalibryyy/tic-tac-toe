import { useState } from 'react';

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);
  const [player, setPlayer] = useState(1);

  function handleSelectSquare(rowIndex, playerSymbolIndex) {
    setPlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    setGameBoard((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
      const newPlayerSymbol = player === 1 ? 'X' : 'O';
      newGameBoard[rowIndex][playerSymbolIndex] = newPlayerSymbol;
      return newGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, playerSymbolIndex) => (
              <li key={playerSymbolIndex}>
                <button
                  onClick={handleSelectSquare.bind(
                    null,
                    rowIndex,
                    playerSymbolIndex
                  )}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
