import React, {useState} from 'react';
import Block from "../block/Block.component";
import "./gird.style.css";
import {postScore} from "../../api/scoreAPI";

function Grid(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(props.player);

  const handleClick = (block) => {
    const squares = [...board];

    if (squares[block] || calculateWinner()) {
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
      console.log(board[a]);

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        postScore(board[a], board).then();
        return board[a];
      }
    }

    return null;
  }


  const setupBoard = () => {
    return board.map((block, index) => {
      return <Block key={index} form={board[index]} handleClick={() => handleClick(index)} />
    });
  }

  return (
    <div className="grid">
      {setupBoard()}
    </div>
  );
}

export default Grid;