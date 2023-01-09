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
    alert(input.value);
  }

  return (
    <nav>
      <ul className="list-none flex space-x-4 md:space-x-12 lg:space-x-28 justify-end text-xl mr-28 mt-8 items-center uppercase">
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
      <div className="flex justify-center items-center mt-4  space-x-6">
        <input
          className="bg-orange-300 text-black"
          type="text"
          placeholder="search"
          id="input-srch"
        />
        <GoSearch id="search-btn" onClick={handleSearch} />
      </div>
    </nav>
  );
}

export default Navbar;
