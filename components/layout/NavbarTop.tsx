import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { SiIfood } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import Image from "next/image";
import Icon from "./Icon";

type Props = {};

function NavbarTop({}: Props) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSearch() {
    let input = document.getElementById("input-srch");
    setSearch(input["value"]);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input["value"]}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data.meals[0]);
          let id = data.meals[0].idMeal;
          router.push(`search/${id}`);
        } else {
          alert("no hay recetas");
        }
      });
  }
  return (
    <div className="flex items-center justify-between ">
        <div className="flex">
        <BiMenu size={"40px"} className="mx-4" color="green" />
      <Icon/>
        </div>
        

      <div className="flex justify-center items-center mx-2 my-1 space-x-2 ">
        <input
          className=" w-full text-slate-500 rounded-lg shadow-sm focus:ring-1 focus:ring-green-500  border-b-4 focus:border-green-500 focus:outline-dotted hover:border-green-300 border-green-100 "
          type="search"
          placeholder="Search a meal"
          id="input-srch"
        />
        <button
          id="search-btn"
          onClick={handleSearch}
          className="bg-green-400 p-2 rounded-t-lg rounded-r-xl"
        >
          <GoSearch size={30} />
        </button>
      </div>
    </div>
  );
}

export default NavbarTop;
