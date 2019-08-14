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

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${process.env.REACT_APP_BACKGROUND_URL})`,
      }} 
      className="App"
    >
      <Logo url={process.env.REACT_APP_LOGO_URL} />
      <Counter date={process.env.REACT_APP_CEST_DATE} />
    </div>
  );
}

export default App;
