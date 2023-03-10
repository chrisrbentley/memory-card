/* eslint-disable react/prop-types */
import React from 'react';

function GameOver(props) {
  const { score, setScore, setHighScore, setGameOver, cards, setCards } = props;

  function onPlayAgain() {
    setHighScore(score);
    setScore(0);
    setGameOver(false);

    // reset cards
    const resetCards = cards.map((card) => {
      return {
        ...card,
        clicked: false,
      };
    });
    setCards(resetCards);
  }

  return (
    <div id="modal">
      <div id="modal-content">
        <h3>You won!</h3>
        <button onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default GameOver;
