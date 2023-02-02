import { ColorFilter } from "./filters/color";
import { MaterialFilter } from "./filters/material";
import { OccasionFilter } from "./filters/occasion";
import { PriceFilter } from "./filters/price";

export const Filter = () => {
  return (
    <div className="flex bg-white m-3 p-5">
      <div className="w-1/4">
        <PriceFilter />
      </div>
      <div className="w-1/4">
        <ColorFilter />
      </div>
      <div className="w-1/4">
        <MaterialFilter />
      </div>
      <div className="w-1/4">
        <OccasionFilter />
      </div>
    </div>
  );
};
