import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow } from 'react-icons/wi';

const SearchForm = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherIcon = (description) => {
    switch (description) {
      case 'clear sky':
        return <WiDaySunny />;
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
        return <WiCloudy />;
      case 'shower rain':
      case 'rain':
        return <WiRain />;
      case 'snow':
        return <WiSnow />;
      default:
        return null;
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af413077c792e0705064e0298ab70d9e`
      );

      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div>
      <div>
        <img src='https://wiki.resilience-territoire.ademe.fr/images/resilienceterritoire/4/4b/Meteo-France.png'></img>
      </div>
      <br></br>
      <input
        type="text"
        value={city}
        onChange={handleInputChange}
        placeholder="Entrer une ville"
      />

      {loading && <div>Chargement...</div>}
      {error && <div>Erreur : {error.message}</div>}
      {data && (
        <div>
          <h3>{data.name}</h3>
          <p>Temperature : {Math.round(data.main.temp - 273.15)}°C</p>{' '}
          <p>Description : {data.weather[0].description}</p>
          <p>Humidité : {data.main.humidity}</p>
          <p>Longitude : {data.coord.lon}</p>
          <p>Latitude : {data.coord.lat}</p>
          <p>Pays : {data.sys.country}</p>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
