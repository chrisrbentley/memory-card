import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import GameOver from './components/GameOver';
import './styles/app.css';
import uniqid from 'uniqid';

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // eslint-disable-next-line no-unused-vars
  const [gameOver, setGameOver] = useState(false);

  const teams = [
    {
      team: 'Arizona Diamondbacks',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-arizona-diamondbacks-logo-480x480.png',
      clicked: false,
      id: uniqid(),
    },
    {
      team: 'Atlanta Braves',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-atlanta-braves-logo-480x480.png',
      clicked: false,
      id: uniqid(),
    },
    {
      team: 'Baltimore Orioles',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-baltimore-orioles-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Orioles',
    },
    {
      team: 'Boston Red Sox',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-boston-red-sox-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'RedSox',
    },
    {
      team: 'Chicago Cubs',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-chicago-cubs-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Cubs',
    },
    {
      team: 'Chicago White Sox',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-chicago-white-sox-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'WhiteSox',
    },
    {
      team: 'Cincinnati Reds',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-cincinnati-reds-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Reds',
    },
    {
      team: 'Cleveland Guardians',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-cleveland-guardians-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Guardians',
    },

    {
      team: 'Colorado Rockies',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-colorado-rockies-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Rockies',
    },
    {
      team: 'Detroit Tigers',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-detroit-tigers-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Tigers',
    },
    {
      team: 'Houston Astros',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-Houston-Astros-Logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Astros',
    },
    {
      team: 'Kansas City Royals',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-kansas-city-royals-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Royals',
    },
    {
      team: 'Los Angeles Angels',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-los-angeles-angels-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Angels',
    },
    {
      team: 'Los Angeles Dodgers',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-los-angeles-dodgers-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Dodgers',
    },
    {
      team: 'Miami Marlins',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-miami-marlins-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Marlins',
    },
    {
      team: 'Milwaukee Brewers',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-milwaukee-brewers-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Brewers',
    },
    {
      team: 'Minnesota Twins',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-minnesota-twins-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Twins',
    },
    {
      team: 'New York Mets',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-new-york-mets-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Mets',
    },
    {
      team: 'New York Yankees',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Yankees',
    },
    {
      team: 'Oakland Athletics',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-oakland-athletics-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Athletics',
    },
    {
      team: 'Philadelphia Phillies',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-Philadelphia-Phillies-Logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Phillies',
    },
    {
      team: 'Pittsburgh Pirates',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-pittsburgh-pirates-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Pirates',
    },
    {
      team: 'San Diego Padres',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-san-diego-padres-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Padres',
    },
    {
      team: 'San Francisco Giants',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-san-francisco-giants-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Giants',
    },
    {
      team: 'Seattle Mariners',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-seattle-mariners-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Mariners',
    },
    {
      team: 'St. Louis Cardinals',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-st-louis-cardinals-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Cardinals',
    },
    {
      team: 'Tampa Bay Rays',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-tampa-bay-rays-logo-480x480.png',
      clicked: false,
      id: uniqid(),
    },
    {
      team: 'Texas Rangers',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-texas-rangers-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'Rays',
    },
    {
      team: 'Toronto Blue Jays',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-toronto-blue-jays-logo-480x480.png',
      clicked: false,
      id: uniqid(),
      shorthand: 'BlueJays',
    },
    {
      team: 'Washington Nationals',
      logo: 'https://loodibee.com/wp-content/uploads/mlb-Washington-Nationals-Logo-480x480.png',
      clicked: false,
      id: uniqid(),
    },
  ];

  const [cards, setCards] = useState(teams);

  return (
    <div className="App">
      <Header
        score={score}
        highScore={highScore}
      />
      <Cards
        score={score}
        setScore={setScore}
        highScore={highScore}
        setHighScore={setHighScore}
        cards={cards}
        setCards={setCards}
        setGameOver={setGameOver}
      />
      {gameOver ? (
        <GameOver
          score={score}
          setScore={setScore}
          setHighScore={setHighScore}
          setGameOver={setGameOver}
          cards={cards}
          setCards={setCards}
        />
      ) : null}
    </div>
  );
}

export default App;
