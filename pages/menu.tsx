/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

type Props = {};

function menu({}: Props) {
  return (
    <div className="h-full min-h-screen min-w-screen w-full bg-orange-400 flex-col justify-center pt-12 space-y-6 font-unbounded pl-8 pb-8">
      <div className="border-b-2 pb-12 mx-8 border-orange-600">
        <Link href={"/"}>
          <img
            src="/images/image4.png"
            alt=""
            className="absolute w-[150px] right-20 top-4"
          />
        </Link>
        <h1 className="text-6xl pl-20 uppercase">Menu</h1>
      </div>
      <div className="flex-col space-y-20 py-20 border-b-2 border-orange-600 ml-12">
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
        className="bg-orange-300 text-slate-500 w-1/3 rounded-lg shadow-sm focus:ring-1 focus:ring-orange-500  border-b-4 focus:border-orange-500 focus:outline-dotted hover:border-orange-300 border-orange-100 "
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
