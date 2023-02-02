import { useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";

export const MaterialFilter = () => {
  
  const list = ["All", "Platinum", "Gold", "Silver"];
  
  const params = [];
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  if (searchParams.get("color")) params.push(["color", searchParams.get("color")]);
  if (searchParams.get("price")) params.push(["price", searchParams.get("price")]);
  if (searchParams.get("occasion")) params.push(["occasion", searchParams.get("occasion")]);

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
      <p className="px-5 text-base text-gray-500 mb-2 font-raj">Material</p>
      <div className="border-r px-5 py-4">
        <select
          onChange={onChange}
          name="material"
          value={state}
          className="w-full border p-2 rounded"
        >
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
