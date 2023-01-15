/* eslint-disable @next/next/no-img-element */
import { Inter } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Content from "../components/Content";
import Navbar from "../components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="w-full h-full min-h-screen flex font-unbounded font-bold bg-[#fed7aa]">
        <div className="w-1/3 h-screen min-h-screen bg-[#fed7aa] flex flex-col justify-between p-4">
          <img src="/images/image4.png" className=" h-[100px] w-[150px]" alt="" />     
          <h2 className="text-2xl mx-8 italic uppercase">
            Your favourite site to search or discover new meals
          </h2>
        </div>
        
            <Image
              src="/images/image2.png"
              width={300}
              height={300}
              className="rotate-12 absolute left-60 top-40"
              alt="image1"
            />
        
        <div className="min-w-2/3 w-full flex flex-col">
          <div className=" bg-orange-400 h-5/6 text-white">
            {/* <Image
              src="/images/image3.png"
              width={120}
              height={180}
              className="absolute left-[700px] top-0"
              alt="image1"
            /> */}
            <Navbar />
            <Content />
          </div>
          <div className=" bg-orange-100 h-1/6 flex ">
            <div className="w-1/2 flex justify-center items-center space-x-8 mr-10 border-r-2 border-orange-700">
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
