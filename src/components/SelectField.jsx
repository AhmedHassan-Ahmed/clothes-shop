import { useState } from "react";

function SelectField({ placeholder, options = [] }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full relative my-2">
      
      <div
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-400 p-3 rounded-md cursor-pointer bg-white"
      >
        {selected || placeholder}
      </div>

      {open && (
        <ul className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md max-h-40 overflow-y-auto z-50">
          {options.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SelectField;