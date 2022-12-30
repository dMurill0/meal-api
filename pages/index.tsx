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
      <div className="w-screen h-screen  flex font-unbounded font-bold">
        <div className="w-1/3 bg-orange-200 h-screen relative">
          <img
            src="/images/logo.png"
            className="absolute -top-20 h-[300px]"
            alt=""
          />

          <Image
            src="/images/image2.png"
            width={480}
            height={480}
            className="rotate-12 absolute -right-20 top-40"
            alt="image1"
          />
          <h2 className="text-4xl mx-8 italic absolute bottom-40">
            Your favourite site to search or discover new meals
          </h2>
        </div>
        <div className="w-2/3 flex flex-col">
          <div className=" bg-orange-400 h-5/6 text-white">
            <Image
              src="/images/image3.png"
              width={120}
              height={180}
              className="absolute left-[700px] top-0"
              alt="image1"
            />
            <Navbar />
            <Content />
          </div>
          <div className=" bg-orange-100 h-1/6 flex">
            <div className="w-1/2 flex justify-center items-center space-x-8">
              <h1 className="uppercase  text-6xl">22k+</h1>
              <h2>Happy consumer</h2>
            </div>

            <div className="w-1/2 flex items-center space-x-8">
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
