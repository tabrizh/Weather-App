import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './SelectCity.scss';

type Props = {
  callApi: Function;
  setFahrenheit: Function;
};

const SelectCity: React.FC<Props> = ({ callApi, setFahrenheit }: Props) => {
  const [selected, setSelected] = useState<string>('');

  return (
    <div className="selectAndSwitch">
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        callApi={callApi}
      />
      <div className="toggle">
        <p className="celcius">&deg;C</p>
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox"
          onChange={e => setFahrenheit(e.target.checked)}
        />
        <label htmlFor="checkbox" className="label">
          <div className="ball"></div>
        </label>
        <p className="fahrenheit">&deg;F</p>
      </div>
    </div>
  );
};

export default SelectCity;
