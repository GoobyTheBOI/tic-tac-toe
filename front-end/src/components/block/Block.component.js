import React from 'react';
import "./block.style.css";

function Block(props) {

  return (
    <div onClick={() => props.handleClick()} className={`block ${props.form}`}></div>
  );
}

export default Block;