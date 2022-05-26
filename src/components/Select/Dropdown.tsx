import React, { useEffect, useState } from "react";
import "./SelectCity.scss";

type Props = {
  selected: string;
  setSelected: Function;
  callApi: Function;
};

const Dropdown: React.FC<Props> = ({
  selected,
  setSelected,
  callApi,
}: Props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const options: string[] = [
    "Lisbon",
    "London",
    "Paris",
    "Berlin",
    "New York",
    "Madrid",
    "Prague",
  ];

  useEffect(() => {
    !selected && setSelected(options[0]);
  }, []);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span>▾</span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, idx) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
                callApi(option);
              }}
              className="dropdown-item"
              key={idx}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
