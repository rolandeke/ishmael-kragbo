import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const OccasionFilter = () => {
  const list = ["All", "Wedding", "Everyday", "Special", "Formal"];
  const params = [];
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  if (searchParams.get("material")) params.push(["material", searchParams.get("material")]);
  if (searchParams.get("price")) params.push(["price", searchParams.get("price")]);
  if (searchParams.get("color")) params.push(["color", searchParams.get("color")]);

  const [state, setState] = useState("All");

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
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Occasion</p>
      <div className="px-5 py-4">
        <select name="occasion" value={state} onChange={onChange} className="w-full border p-2 rounded">
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
