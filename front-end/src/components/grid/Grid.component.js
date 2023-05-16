import React from 'react';
import Block from "../block/Block.component";
import "./gird.style.css";

function Grid({board, handleClick, winningLine}) {
  const setupBoard = () => {
    return board.map((block, index) => {
      const isWinning = winningLine && winningLine.includes(index);
      return (
        <Block
          key={index}
          form={board[index]}
          winner={isWinning}
          handleClick={() => handleClick(index)}
        />
      );
    });
  }

  return (
    <div className="grid">
      {setupBoard()}
    </div>
  );
}

export default Grid;