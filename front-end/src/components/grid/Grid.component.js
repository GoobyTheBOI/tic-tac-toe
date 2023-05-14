import React, {useState} from 'react';
import Block from "../block/Block.component";
import "./gird.style.css";
import {postScore} from "../../api/scoreAPI";

function Grid({board, handleClick}) {
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