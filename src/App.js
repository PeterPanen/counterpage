import React, { useState } from 'react';
import moment from 'moment';
import './App.css';

const Counter = ({ date }) => {
  const [, updateState] = useState();

  const eventDate = moment(date, 'DD-MM-YYYY HH:mm:ss').unix();
  const currentDate = moment().unix();
  const duration = moment.duration((eventDate - currentDate) * 1000, 'milliseconds');

  setTimeout(() => updateState({}), 500);

  return (
    <h1 className="Counter">{`${moment.duration(duration).days()} days ${moment.duration(duration).hours()} hours ${moment.duration(duration).minutes()} minutes ${moment.duration(duration).seconds()} seconds`}</h1>
  );
}

const Logo = ({ url }) => (
  <div className="LogoContainer">
    <img className="Logo" src={url} alt="logo" />
  </div>
);

function App({ serverState }) {
  return (
    <div
      style={{
        backgroundImage: `url(${serverState.BACKGROUND_URL})`,
      }} 
      className="App"
    >
      <Logo url={serverState.LOGO_URL} />
      <Counter date={serverState.CEST_DATE} />
    </div>
  );
}

export default App;
