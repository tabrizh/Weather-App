import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import SelectCity from './components/Select/SelectCity';
import Weather from './components/Weather/Weather';
import IWeatherData from './Interfaces/IWeatherData';
import './App.scss';

const App: React.FC<{}> = () => {
  const [selectedCity] = useState<string>('Lisbon');
  const [fahrenheit, setFahrenheit] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<IWeatherData>({
    temperature: '273',
    sunrise: 0,
    sunset: 0,
    image: '',
  });

  const api_call = async (city: string) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    try {
      const request = axios.get(URL);
      const response = await request;
      setWeatherData({
        temperature: response.data.main.temp,
        sunrise: response.data.sys.sunrise,
        sunset: response.data.sys.sunset,
        image: response.data.weather[0].icon,
      });
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  useEffect(() => {
    api_call(selectedCity);
  }, [selectedCity]);

  return (
    <div className="App">
      <div className="weatherContainer">
        <Header />
        <SelectCity callApi={api_call} setFahrenheit={setFahrenheit} />
        {<Weather weatherData={weatherData} fahrenheit={fahrenheit} />}
      </div>
    </div>
  );
};

export default App;
