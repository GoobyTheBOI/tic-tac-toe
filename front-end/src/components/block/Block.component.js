import React from 'react';
import "./block.style.css";

function Block({ form, winner, handleClick }) {
  const winnerBackground = winner && 'winnerBackground';
  return (
    <div onClick={() => handleClick()} className={`block ${form} ${winnerBackground}`}></div>
  );
}

export default Block;