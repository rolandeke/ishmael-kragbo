import { useState } from "react";

export const ColorFilter = () => {
  const list = [
    "All",
    "Clear",
    "White",
    "Green",
    "Blue",
    "Red",
    "Purple",
    "Yellow",
    "Turquoise",
    "Dark Red",
    "Light Blue",
  ];

  const state = useState("All");

  return (
    <div>
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Color</p>
      <div className="border-r border-l px-5 py-4">
        <select value={state} className="w-full border p-2 rounded">
          {list.map((e, key) => (
            <option key={key} value={e}>
              {e}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
