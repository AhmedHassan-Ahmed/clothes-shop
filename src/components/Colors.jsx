import { useState } from "react";

const colorsList = ["#000000", "#FF0000", "#0000FF", "#00FF00", "#FFC0CB"];

function Colors() {
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleColor = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  return (
    <div className="flex gap-5 mt-4">
      {colorsList.map((color) => (
        <div
          key={color}
          onClick={() => toggleColor(color)}
          className={`w-8 h-8 rounded-full cursor-pointer border-2 ${
            selectedColors.includes(color)
              ? "border-green-700 scale-110"
              : "border-gray-300"
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export default Colors;