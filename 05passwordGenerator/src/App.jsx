import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(true);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let possibleCharacters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) possibleCharacters += "0123456789";
    if (characterAllowed) possibleCharacters += "!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * possibleCharacters.length);
      pass += possibleCharacters.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator]);

  useRef(passwordGenerator);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  const passwordRef = useRef(null);

  return (
    <div className="w-full max-w-md bg-gray-700 rounded-lg border border-gray-700 shadow-md px-4 py-8 mx-auto my-10">
      <div className="flex flex-col gap-2 shadow-sm rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="p-4 bg-gray-800 text-white border-none outline-none select-none cursor-pointer"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={handleCopy}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 cursor-pointer"
        >
          Copy
        </button>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 w-full justify-between px-4 py-2 bg-gray-800 shadow-sm">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-3/4 h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <label className="text-white font-bold select-none ">
              Length: {length}
            </label>
          </div>
          <div className="flex items-center gap-2 w-full justify-between px-4 py-2 bg-gray-800 shadow-sm">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="w-4 h-4 text-blue-600"
              checked={numberAllowed}
              readOnly
              id="numbers"
            />
            <label
              htmlFor="numbers"
              className="text-white font-bold select-none"
            >
              Numbers
            </label>
          </div>
          <div className="flex items-center gap-2 w-full justify-between px-4 py-2 bg-gray-800 shadow-sm">
            <input
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={(e) => setCharacterAllowed(e.target.checked)}
              id="characters"
              className="w-4 h-4 text-blue-600"
              checked={characterAllowed}
            />
            <label
              htmlFor="characters"
              className="text-white font-bold select-none"
            >
              Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
