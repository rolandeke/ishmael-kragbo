import { useState } from "react";
import { useNavigate } from "react-router";
import { createSearchParams, useSearchParams } from "react-router-dom";

export const PriceFilter = () => {
  const params = [];
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  if (searchParams.get("material")) params.push(["material", searchParams.get("material")]);
  if (searchParams.get("color")) params.push(["color", searchParams.get("color")]);
  if (searchParams.get("occasion")) params.push(["occasion", searchParams.get("occasion")]);

  const [state, setState] = useState(2500);

  const onChange = (event) => {
    const { name, value } = event?.target;

    params.push([name, value.toLowerCase()]);

    setState(value);

    navigate({
      pathname: '/',
      search: `?${createSearchParams(params)}`,
    });
  };

  return (
    <div>
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Price</p>
      <div className="px-5 py-4">
        <input value={state} onChange={onChange} name="price" min={100} max={2500} type="range" className="w-full" />
        <div className="text-xs font-raj text-gray-500 justify-between flex mt-2">
          <p>Le 100</p>
          <p>Le 25000</p>
        </div>
      </div>
    </div>
  );
};
