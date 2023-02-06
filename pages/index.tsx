/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/layout/Navbar";
import NavbarTop from "../components/layout/NavbarTop";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full h-full min-h-screen flex font-unbounded font-bold  text-black">
       

       
        <div className="min-w-2/3 w-full flex flex-col">
          <div className=" h-5/6 text-black">
            {/* <Image
              src="/images/image3.png"
              width={120}
              height={180}
              className="absolute left-[700px] top-0"
              alt="image1"
            /> */}
            <NavbarTop />
            <Navbar />
            <Content />
          </div>
          <div className="  h-1/6 flex ">
            <div className="w-1/2 flex justify-center items-center space-x-8 mr-10 border-r-2 border-green-700">
              <h1 className="uppercase  text-6xl">22k+</h1>
              <h2>Happy consumer</h2>
            </div>

            <div className="w-1/2 flex items-center space-x-8 m-8">
              <img
                src="/images/profile.jpg"
                className="rounded-full h-[100px] "
                alt=""
              />
              <p className="italic font-thin">
                &quot; This is the best site to grab some recipes, i absolute
                love it!! &quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
