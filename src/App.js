import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = (event) => {
    // setTheme(event.target.value);  //  <-- COMMENT THE PREVIOUS CODE

    theme = event.target.value; // ❌  WRONG!!
  };

  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange={toggleTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>
    </div>
  );
}

export default App;
