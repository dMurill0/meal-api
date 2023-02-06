import React from "react";
import { BiMenu } from "react-icons/bi";
import { SiIfood } from "react-icons/si";

type Props = {};

function Icon({}: Props) {
  return (
    <div className="flex items-center">
      
      <h1 className="text-2xl">stayHealthy</h1>
      <SiIfood className="ml-2 text-green-500 text-3xl" />
    </div>
  );
}

export default Icon;
