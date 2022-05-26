import React from 'react';
import './Weather.scss';
import IWeatherData from '../../Interfaces/IWeatherData';

type Props = {
  weatherData: IWeatherData;
  fahrenheit: boolean;
};

const Weather: React.FC<Props> = (props: Props) => {
  const temp = props.fahrenheit
    ? Math.ceil((Number(props.weatherData.temperature) - 273) * 1.8 + 32) +
      ' ºF'
    : Math.ceil(Number(props.weatherData.temperature) - 273.15) + ' ºC';
  return (
    <div className="weather">
      <h1>{temp}</h1>
      <img
        src={`http://openweathermap.org/img/w/${props.weatherData.image}.png`}
        alt="weather"
      />
      <div className="daylight">
        <p>
          Sunrise:{' '}
          {new Date(props.weatherData.sunrise * 1000)
            .toLocaleTimeString('en-US', { hour12: false })
            .slice(0, 5)}
        </p>
        <p>
          Sunset:{' '}
          {new Date(props.weatherData.sunset * 1000)
            .toLocaleTimeString('en-US', { hour12: false })
            .slice(0, 5)}
        </p>
      </div>
    </div>
  );
};

export default Weather;
