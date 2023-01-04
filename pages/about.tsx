import React from "react";

type Props = {};

function about({}: Props) {
  return (
    <div className="h-screen w-screen bg-[#fcd9bd] flex font-unbounded">
      <div className="w-1/2 h-screen relative">
      <div className="w-1/2 bg-[#fff] h-screen">
        
        </div>
        <img className="absolute w-[450px] left-40 top-24" src="/images/image5.png" alt="" />
      </div>
      <div className="w-1/2  flex-col my-auto space-y-8 m-4">
        <h1 className="text-4xl font-bold">About us</h1>
        <h3 className="text-2xl italic">We provide multiple recipes from all around the world</h3>
        <p className="text-sm">
          Food from us comes from our relatives, whther they have wings, fins or
          roots. That is how we consider food. Food has a culture. It has a
          history. It has a Story. And we want to write the next chapter of the
          Food Culture.
        </p>
      </div>
    </div>
  );
}

export default about;
