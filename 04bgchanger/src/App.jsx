import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-full p-3">
          <button
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: "olive" }}
            onClick={() => setColor("olive")}
          ></button>
          <button
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          ></button>
          <button
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          ></button>
          <button
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
