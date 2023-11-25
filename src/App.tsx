import React, {useState} from "react";
import "./App.css";
import ColorPalette from "./components/ColorPalette";
import {generateColorPalette} from "./utils/colorUtils";
import {generateRandomTheme} from "./utils/themeUtils";

function App() {
  const [colors, setColors] = useState(generateColorPalette());
  const [theme, setTheme] = useState(generateRandomTheme());

  return (
    <div className="App">
      <h1>Random Theme Generator</h1>
      <h2>Color Palette</h2>
      <ColorPalette colors={colors} />
      <button onClick={() => setColors(generateColorPalette())}>
        Generate New Palette
      </button>
      <h2>Design Style</h2>
      <p>{theme}</p>
      <button onClick={() => setTheme(generateRandomTheme())}>
        Generate New Design Style
      </button>
    </div>
  );
}

export default App;
