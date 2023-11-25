import React from "react";

interface ColorBoxProps {
  color: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({color}) => {
  return (
    <div
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        margin: "5px",
      }}
    ></div>
  );
};

export default ColorBox;
