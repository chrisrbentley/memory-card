/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';

function Cards(props) {
  const {
    cards,
    setCards,
    score,
    setScore,
    highScore,
    setHighScore,
    setGameOver,
  } = props;

  function onCardClick(e) {
    e.preventDefault();

    const cardID = e.target.dataset.id;
    const clickedCardIndex = cards.findIndex((card) => card.id === cardID);
    const updatedCards = [...cards];

    console.log(updatedCards);

    if (cards[clickedCardIndex].clicked === false) {
      setScore(score + 1);
      updatedCards[clickedCardIndex].clicked = true;
      setCards(updatedCards);
    } else {
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      const resetCards = cards.map((card) => {
        return {
          ...card,
          clicked: false,
        };
      });
      setCards(resetCards);
    }
  }

  function shuffleCards(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setCards(array);
  }

  useEffect(() => {
    if (score < 30) {
      shuffleCards(cards);
    } else {
      setGameOver(true);
    }
  }, [score, cards]);

  return (
    <main>
      <div id="cards">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card"
              onClick={onCardClick}
              data-id={card.id}
            >
              <img
                src={card.logo}
                alt=""
                className="logo"
                data-id={card.id}
              />
              <p data-id={card.id}>{card.team}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Cards;
