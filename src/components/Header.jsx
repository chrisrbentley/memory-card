/* eslint-disable react/prop-types */
import React from 'react';

function Header(props) {
  const { score } = props;

  return (
    <header>
      <h1>Baseball Memory</h1>
      <h3>Score: {score}</h3>
    </header>
  );
}

export default Header;
