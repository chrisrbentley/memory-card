/* eslint-disable react/prop-types */
import React from 'react';

function Cards(props) {
  const { cards } = props;
  console.log(cards);

  return (
    <main>
      <div id="cards">
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              className="card"
            >
              <img
                src={card.logo}
                alt=""
                className="logo"
              />
              <p>{card.team}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Cards;
