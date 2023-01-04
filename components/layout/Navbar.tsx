import Link from "next/link";
import React from "react";
import { GoSearch } from "react-icons/go";

type Props = {};

function Navbar({}: Props) {
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
        <GoSearch />
      </ul>
    </nav>
  );
}

export default Navbar;
