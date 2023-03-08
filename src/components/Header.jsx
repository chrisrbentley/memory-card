/* eslint-disable react/prop-types */
import React from 'react';

function Header(props) {
  const { score, highScore } = props;

  return (
    <header>
      <h1>Baseball Memory</h1>
      <div id="scores">
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
    </header>
  );
}

export default Header;
