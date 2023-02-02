import { ColorFilter } from "./filters/color";
import { MaterialFilter } from "./filters/material";
import { OccasionFilter } from "./filters/occasion";
import { PriceFilter } from "./filters/price";
import { BiReset } from "react-icons/bi";
import { useNavigate } from "react-router";

export const Filter = () => {
    const navigate = useNavigate();

  const reset = () => {
    navigate({
      pathname: '/',
    });
  }

  return (
    <div className="flex bg-white m-3 p-5">
      <div className="flex flex-1">
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
      <div className="px-5 flex items-center">
        <button onClick={reset}>
          <BiReset className="text-5xl text-gray-600" />
        </button>
      </div>
    </div>
  );
};
