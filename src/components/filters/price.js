export const PriceFilter = () => {
  return (
    <div>
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Price</p>
      <div className="px-5 py-4">
        <input min="1" max="100" type="range" className="w-full" />
        <div className="text-xs font-raj text-gray-500 justify-between flex mt-2">
          <p>Le 100</p>
          <p>Le 500</p>
          <p>Le 1000</p>
        </div>
      </div>
    </div>
  );
};
