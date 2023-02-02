export const OccasionFilter = () => {
  const list = ["All", "Wedding", "Everyday", "Special", "Formal"];

  return (
    <div>
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Occasion</p>
      <div className="px-5 py-4">
        <select className="w-full border p-2 rounded">
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
