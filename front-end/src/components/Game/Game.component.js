import React, { useCallback, useEffect, useState } from 'react';
import Grid from '../grid/Grid.component';
import { postScore } from '../../api/scoreAPI';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const [isGameEnd, setIsGameEnd] = useState(false);
  const [winningLine, setWinningLine] = useState(null);
  const [isDraw, setIsDraw] = useState(false);


  const calculateWinner = useCallback(() => {
    const winningLines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // left diagonal
      [2, 4, 6], // right diagonal
    ];

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return winningLines[i];
      }
    }

    return null;
  }, [board]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setIsXNext(false);
    setIsGameEnd(false);
    setWinningLine(null);
    setIsDraw(false);
  }, []);

  const currentForm = useCallback(() => {
    return isXNext ? 'x' : 'o';
  }, [isXNext]);

  const handleClick = useCallback(block => {
    if (board[block] || isGameEnd || calculateWinner()) {
      return;
    }

    const updatedBoard = [...board];
    updatedBoard[block] = currentForm();
    setBoard(updatedBoard);
  }, [board, isGameEnd, calculateWinner, currentForm]);


  useEffect(() => {
    const winner = calculateWinner();
    if (winner !== null) {
      setIsGameEnd(true);
      setWinningLine(winner);
    } else if (board.every((block) => block !== null)) {
      setIsGameEnd(true);
      setIsDraw(true);
    } else {
      setIsXNext((prevIsXNext) => !prevIsXNext);
    }
  }, [board, calculateWinner]);

  useEffect(() => {
    async function postData() {
      if (isGameEnd) {
        try {
          await postScore((isDraw && 'd') || currentForm(), board);
        } catch (error) {
          console.error('Error posting score:', error);
        }
      }
    }
    postData().catch((error) => console.error('Error posting score:', error));
  }, [isGameEnd, isDraw, currentForm, board]);

  return (
    <>
      <Grid board={board} winningLine={winningLine} handleClick={handleClick} />
      <button onClick={resetGame}>Restart Game</button>
    </>
  );
}

export default Game;
