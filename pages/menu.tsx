/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import Icon from "../components/layout/Icon";

type Props = {};

function menu({}: Props) {
  return (
    <div className="h-full min-h-screen min-w-screen w-full bg-white-400 flex-col justify-center pt-2 space-y-6 font-unbounded pl-8 pb-8">
      <div className="border-b-2 pb-4 mx-8 border-white-600 flex">
        <Link href={"/"}>
         <Icon/>
        </Link>
        <h1 className="text-xl pl-20 uppercase">Menu</h1>
      </div>
      <div className="flex-col space-y-20 py-20 border-b-2 border-white-600 ml-12">
        <div className="flex">
          <h2>Starter:</h2>
        </div>
        <div className="flex">
          <h2>Main:</h2>
        </div>
        <div className="flex">
          <h2>Dessert: </h2>
        </div>
      </div>
      {/* <div className="flex justify-center items-center mt-8  space-x-6">
      <input
        className="bg-white-300 text-slate-500 w-1/3 rounded-lg shadow-sm focus:ring-1 focus:ring-white-500  border-b-4 focus:border-white-500 focus:outline-dotted hover:border-white-300 border-white-100 "
        type="search"
        placeholder="Search a meal"
        id="input-srch"
      />
      <button id="search-btn">
        <GoSearch size={30} />
      </button>
    </div> */}
    </div>
  );
}

export default menu;
