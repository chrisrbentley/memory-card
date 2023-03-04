/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import './styles/app.css';
import uniqid from 'uniqid';

function App() {
  const [diamondbacks, setDiamondbacks] = useState({
    team: 'Arizona Diamondbacks',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-arizona-diamondbacks-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [braves, setBraves] = useState({
    team: 'Atlanta Braves',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-atlanta-braves-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [orioles, setOrioles] = useState({
    team: 'Baltimore Orioles',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-baltimore-orioles-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [redSox, setRedSox] = useState({
    team: 'Boston Red Sox',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-boston-red-sox-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [cubs, setCubs] = useState({
    team: 'Chicago Cubs',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-chicago-cubs-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [whiteSox, setWhiteSox] = useState({
    team: 'Chicago White Sox',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-chicago-white-sox-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [reds, setReds] = useState({
    team: 'Cincinnati Reds',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-cincinnati-reds-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [guardians, setGuardians] = useState({
    team: 'Cleveland Guardians',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-cleveland-guardians-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [rockies, setRockies] = useState({
    team: 'Colorado Rockies',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-colorado-rockies-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [tigers, setTigers] = useState({
    team: 'Detroit Tigers',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-detroit-tigers-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [astros, setAstros] = useState({
    team: 'Houston Astros',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-Houston-Astros-Logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [royals, setRoyals] = useState({
    team: 'Kansas City Royals',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-kansas-city-royals-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [angels, setAngels] = useState({
    team: 'Los Angeles Angels',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-los-angeles-angels-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [dodgers, setDodgers] = useState({
    team: 'Los Angeles Dodgers',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-los-angeles-dodgers-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [marlins, setMarlins] = useState({
    team: 'Miami Marlins',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-miami-marlins-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [brewers, setBrewers] = useState({
    team: 'Milwaukee Brewers',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-milwaukee-brewers-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [twins, setTwins] = useState({
    team: 'Minnesota Twins',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-minnesota-twins-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [mets, setMets] = useState({
    team: 'New York Mets',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-new-york-mets-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [yankees, setYankees] = useState({
    team: 'New York Yankees',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-new-york-yankees-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [athletics, setAthletics] = useState({
    team: 'Oakland Athletics',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-oakland-athletics-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [phillies, setPhillies] = useState({
    team: 'Philadelphia Phillies',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-Philadelphia-Phillies-Logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [pirates, setPirates] = useState({
    team: 'Pittsburgh Pirates',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-pittsburgh-pirates-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [padres, setPadres] = useState({
    team: 'San Diego Padres',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-san-diego-padres-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [giants, setGiants] = useState({
    team: 'San Francisco Giants',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-san-francisco-giants-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [mariners, setMariners] = useState({
    team: 'Seattle Mariners',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-seattle-mariners-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [cardinals, setCardinals] = useState({
    team: 'St. Louis Cardinals',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-st-louis-cardinals-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [rays, setRays] = useState({
    team: 'Tampa Bay Rays',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-tampa-bay-rays-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [rangers, setRangers] = useState({
    team: 'Texas Rangers',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-texas-rangers-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [blueJays, setBlueJays] = useState({
    team: 'Toronto Blue Jays',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-toronto-blue-jays-logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const [nationals, setNationals] = useState({
    team: 'Washington Nationals',
    logo: 'https://loodibee.com/wp-content/uploads/mlb-Washington-Nationals-Logo-480x480.png',
    clicked: false,
    id: uniqid(),
  });

  const cards = [
    diamondbacks,
    braves,
    orioles,
    redSox,
    cubs,
    whiteSox,
    reds,
    guardians,
    rockies,
    tigers,
    astros,
    royals,
    angels,
    dodgers,
    marlins,
    brewers,
    twins,
    mets,
    yankees,
    athletics,
    phillies,
    pirates,
    padres,
    giants,
    mariners,
    cardinals,
    rays,
    rangers,
    blueJays,
    nationals,
  ];

  // console.log(cards);

  return (
    <div className="App">
      <Header />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
