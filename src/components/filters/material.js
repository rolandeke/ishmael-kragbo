export const MaterialFilter = () => {
  const list = ["All", "Platinum", "Gold", "Silver"];

  return (
    <div>
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Material</p>
      <div className="border-r px-5 py-4">
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
