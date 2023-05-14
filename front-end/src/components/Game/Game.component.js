import React, {useEffect, useState} from 'react';
import Grid from "../grid/Grid.component";
import {postScore} from "../../api/scoreAPI";

function Game(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(props.player);
  const [isGameEnd, setIsGameEnd] = useState(false);

  useEffect(() => {
    async function postData() {
      if (isGameEnd) {
        return await postScore(calculateWinner(), board);
      }
    }
    postData().then();

  }, [isGameEnd]);

  const handleClick = (block) => {
    const squares = [...board];

    if (squares[block] || isGameEnd || calculateWinner()) {
      return;
    }

    squares[block] = currentForm();
    setBoard(squares);
    setIsXNext(!isXNext);
  }

  const currentForm = () => {
    if (isXNext) {
      return 'x';
    }

    return 'o'
  }

  useEffect(() => {
    if (calculateWinner() !== null) {
      setIsGameEnd(true);
    }
  }, [board]);

  const calculateWinner = () => {
    const winningLines = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // left diagonal
      [2, 4, 6] // right diagonal
    ]

    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }
  return (
    <Grid board={board} handleClick={handleClick} />
  );
}

export default Game;