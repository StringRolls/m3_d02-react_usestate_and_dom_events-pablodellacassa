import Counter from "./components/Counter";
import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  const [theme, setTheme] = useState("light");

  const [unit, setUnit] = useState("C");

  const weather = [
    {city: "Miami", icon:"🟡", celsius: 29},
    {city: "Mexico City", icon:"⛈️", celsius: 17},
    {city: "Berlin", icon:"🌥️", celsius: 20},
    {city: "Barcelona", icon:"🌤️", celsius: 28} 
  ];

  /*   const handleSelect = (event) => {
    setTheme(event.target.value);
  }; */

  const handleSelect = (event) => {
    setUnit(event.target.value);
  };

  return (
    <div className={"App " + unit}>
    <select onChange={handleSelect}>
      <option value="C"> C </option>
      <option value="F"> F </option>
    </select>
    <div>
      {weather.map(place=>
       (<WeatherWidget
        unit={unit}
        city={place.city}
        icon={place.icon} 
        celsius={place.celsius} />) )}
      </div>
   </div>
    

    /*<div className={"App " + theme}>
      <h1>React - state and events</h1> 
      <Counter />
      <select onChange={handleSelect}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
      <button onClick={() => setUnit("C")}> °C </button>
      <button onClick={() => setUnit("F")}> °F </button>
      <div>
        <WeatherWidget city="Miami" icon="🟡" celsius={29} unit={unit} />
        <WeatherWidget city="Mexico City" icon="⛈️" celsius={17} unit={unit} />
        <WeatherWidget city="Berlin" icon="🌥️" celsius={20} unit={unit} />
        <WeatherWidget city="Barcelona" icon="🌤️" celsius={28} unit={unit} />
      </div>
    </div>  */
  );
}

export default App;
