import React from "react";

type Props = {};

function FilterByZone({}: Props) {
  return (
    <div className="flex space-x-8 cursor-pointer">
      <h3>By zone</h3>
      <h3 className="p-4 bg-orange-300 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        All
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        Spanish
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        Asiatic
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        Italian
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        Greek
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        American
      </h3>
      <h3 className="p-4 bg-orange-200 rounded-full [&.active]bg-orange-400 active:bg-orange-500">
        French
      </h3>
    </div>
  );
}

export default FilterByZone;
