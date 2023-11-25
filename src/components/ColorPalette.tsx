import React from "react";
import ColorBox from "./ColorBox";

interface ColorPaletteProps {
  colors: string[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({colors}) => {
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} />
      ))}
    </div>
  );
};

export default ColorPalette;
