import { useState } from "react";

const sizesList = ["XS", "S", "M", "L", "XL"];

function Sizes() {
  const [selectedSizes, setSelectedSizes] = useState([]);

  const toggleSize = (size) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  return (
    <div className="flex gap-1 flex-wrap mt-4">
      {sizesList.map((size) => (
        <button
          key={size}
          onClick={() => toggleSize(size)}
          className={`px-4 py-2 border rounded-md ${
            selectedSizes.includes(size)
              ? "bg-green-700 text-white"
              : "bg-white"
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}

export default Sizes;