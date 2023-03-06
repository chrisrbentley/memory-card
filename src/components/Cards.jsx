/* eslint-disable react/prop-types */
import React from 'react';

function Cards(props) {
  const { cards, setCards, score, setScore } = props;

  function onCardClick(e) {
    const cardID = e.target.dataset.id;

    const updatedCards = cards.map((card) => {
      if (card.id === cardID && card.clicked === false) {
        setScore(score + 1);
        return {
          ...card,
          clicked: true,
        };
      } else {
        return card;
      }
    });

    setCards(updatedCards);
  }

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
