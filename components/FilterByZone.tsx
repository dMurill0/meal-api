import React from "react";
import { useEffect, useState } from "react";
type Props = {};

function FilterByZone({}: Props) {
  const [zone, setZone] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => {
        setZone(data.meals);
        console.log(data.meals);
      });
  }, []);
  return (
    <div className="flex space-x-2 cursor-pointer truncate">
      <h3>By zone</h3>
      {zone &&
        zone.map((zo) => (
          <h3  key={zo.strArea} className=" p-4 text-xs bg-orange-300 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
            {zo.strArea}
          </h3>
        ))}
    </div>
  );
}

export default FilterByZone;
