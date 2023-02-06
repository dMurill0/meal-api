import Link from "next/link";
import React from "react";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useRouter } from "next/router";
import { AiOutlineDown } from "react-icons/ai";

type Props = {};

function Navbar({}: Props) {
  function handleDropDiets() {
    let btn = document.getElementById("drop-diets");
    btn.style.display = "block";
  }
  function handleDropDietsDown() {
    let btn = document.getElementById("drop-diets");
    btn.style.display = "none";
  }

  return (
    <nav className="border-1 border-t shadow-slate-400 ">
      <ul className="p-2 list-none flex justify-start shadow-b-lg space-x-2 md:space-x-4 lg:space-x-8  text-sm md:text-md lg:text-xl  items-center uppercase">
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={"/menu"}
        >
          Menu
        </Link>
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={"/foods"}
        >
          Foods
        </Link>
        <Link
          className="flex items-center hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1   rounded-t  text-sm hover:text-green-500"
          href={""}
          onMouseEnter={handleDropDiets}
          
        >
          Diets <AiOutlineDown />
          <div className="hidden flex-col absolute bg-white top-20 px-2 py-4 rounded-lg space-y-4" id="drop-diets" onMouseEnter={handleDropDiets} onMouseLeave={handleDropDietsDown}>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Keto</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Paleo</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Low Carb</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Pescetarian</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Vegetarian</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Vegan</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Gluten Free</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Mediterranean</h1>
            <h1 className="pointer text-gray-500 border-b-2 text-xs hover:text-green-400">Dairy Free</h1>
          </div>
        </Link>
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={""}
        >
          Starter
        </Link>
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={""}
        >
          Main
        </Link>
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={""}
        >
          Dessert
        </Link>
        <Link
          className=" hover:shadow-2xl hover:shadow-orange-200 -mb-px mr-1 inline-block  rounded-t  text-sm hover:text-green-500"
          href={"/about"}
        >
          About Us
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
