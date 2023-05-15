import React from 'react';
import "./block.style.css";

function Block(props) {
  const winnerBackground = props.winner && 'winnerBackground';
  return (
    <div onClick={() => props.handleClick()} className={`block ${props.form} ${winnerBackground}`}></div>
  );
}

export default Block;