import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const WeatherDisplay = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let location = useLocation();
  const name = location.pathname.split('/')[2];

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur : {error.message}</div>;
  }

  return (
    <div>
      <h2>Information pour {name}</h2>
      <p>Weather : {data.weather[0].description}</p>
    </div>
  );
};

export default WeatherDisplay;
