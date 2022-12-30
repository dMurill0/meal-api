import React from "react";

type Props = {};

function FilterByType({}: Props) {
  return (
    <div className="flex space-x-8">
      <h3>By type</h3>
      <h3 className="p-4 bg-orange-300 rounded-full">All</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Chicken</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Breakfast</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Vegetarian</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Dessert</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Beef</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Starter</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Seafood</h3>
      <h3 className="p-4 bg-orange-200 rounded-full">Pork</h3>
    </div>
  );
}

export default FilterByType;
