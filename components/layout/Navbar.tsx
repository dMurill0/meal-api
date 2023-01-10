import Link from "next/link";
import React from "react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";

type Props = {};

function Navbar({}: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch() {
    let input = document.getElementById("input-srch");
    setSearch(input.value);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data.meals[0]);
          let id = data.meals[0].idMeal;
          router.push(`Search/${id}`);
        } else {
          alert("no hay recetas");
        }
      });
  }

  return (
    <nav>
      <ul className="list-none flex mx-6 py-2 shadow-b-lg space-x-4 md:space-x-12 lg:space-x-28 justify-center text-xl mr-28 mt-8 items-center uppercase">
        <Link
          className="mx-2 hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block border-l border-t border-r  rounded-t py-2 px-4 "
          href={""}
        >
          Menu
        </Link>
        <Link
          className="mx-2 hover:bg-orange-600 -mb-px mr-1 inline-block border-l border-t border-r  rounded-t py-2 px-4 "
          href={"/foods"}
        >
          Foods
        </Link>
        <Link
          className="mx-2 hover:bg-orange-600 -mb-px mr-1 inline-block border-l border-t border-r  rounded-t py-2 px-4 "
          href={""}
        >
          Services
        </Link>
        <Link
          className="mx-2 hover:bg-orange-600 -mb-px mr-1 inline-block border-l border-t border-r  rounded-t py-2 px-4 "
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
        <button id="search-btn" onClick={handleSearch}>
          <GoSearch size={30} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
