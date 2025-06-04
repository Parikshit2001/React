import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((prev) => prev + 1);
    console.log("value added: ", counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add Value</button>
      <br />
      <button> Remove Value</button>
    </>
  );
}

export default App;
