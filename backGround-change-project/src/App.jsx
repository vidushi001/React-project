import { useState } from 'react'
import './App.css'


function App() {
  const [color, setColor] = useState("green");

  function changeColor(selectedColor) {
    setColor(selectedColor);
  }

  const allColor = ["green", "orange", "yellow", "blue", "red", "purple"];

  return (
    <>
      <div>
        {allColor.map((color) => (
          <button
            key={color}
            onClick={() => changeColor(color)}
            style={{
              backgroundColor: color,
              padding: "15px",
              fontSize: "14px",
              color: "white",
              margin: "5px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {color}
          </button>
        ))}
      </div>

      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}

export default App;

