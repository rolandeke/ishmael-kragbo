import { useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

export const useJewelry = () => {
  const jewelries = useSelector((state) => state.jewelry.data);

  let [searchParams] = useSearchParams();

  const color = searchParams.get("color") || "";
  const price = Number.parseInt(searchParams.get("price") || 25000);
  const material = searchParams.get("material") || "";
  const occasion = searchParams.get("occasion") || "";

  const filterJewelries = jewelries.filter(
    (e) =>
      e.color.toLowerCase().indexOf(color) !== -1 &&
      e.material.toLowerCase().indexOf(material) !== -1 &&
      e.occasion.toLowerCase().indexOf(occasion) !== -1 &&
      e.price <= price
  );

  const [isLoading] = useState(false);

  return { isLoading, jewelries: filterJewelries };
};
