import Link from "next/link";
import React from "react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

type Props = {};

function Navbar({}: Props) {
  const [search, setSearch] = useState("");
  function handleSearch() { 
    let input = document.getElementById("input-srch");
    setSearch(input.value);
    alert(search);
  }

  return (
    <nav>
      <ul className="list-none flex space-x-4 md:space-x-12 lg:space-x-28 justify-center text-xl mr-28 mt-8 items-center uppercase">
        <Link className="mx-2 hover:scale-125 hover:bg-orange-600" href={""}>
          Menu
        </Link>
        <Link
          className="mx-2 hover:scale-125 hover:bg-orange-600"
          href={"/foods"}
        >
          Foods
        </Link>
        <Link className="mx-2 hover:scale-125 hover:bg-orange-600" href={""}>
          Services
        </Link>
        <Link
          className="mx-2 hover:scale-125 hover:bg-orange-600"
          href={"/about"}
        >
          About Us
        </Link>
      </ul>
      <div className="flex justify-center items-center mt-8  space-x-6">
        <input
          className="bg-orange-300 text-slate-500 w-1/3 rounded-lg shadow-sm focus:ring-1 focus:ring-orange-500  border-b-4 focus:border-orange-500 focus:outline-dotted hover:border-orange-300 border-orange-100 "
          type="search"
          placeholder="Search a meal"
          id="input-srch"
        />
        <Link
          href={`/search/${search}`}
          id="search-btn"
          onClick={handleSearch}
        >
          <GoSearch size={30} />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
