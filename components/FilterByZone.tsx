import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
import Link from "next/link";
type Props = {};

function FilterByZone({handleContent}: Props) {
  const [zone, setZone] = useState([]);
  

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => {
        setZone(data.meals);
        console.log(data.meals);
      });
  }, []);


  return (
    <div className="flex space-x-2 cursor-pointer truncate">
      <h3>By zone</h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={14}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {zone &&
          zone.map((zo) => (
            <SwiperSlide key={zo.strArea} className="flex">
              <h3
              
                id="btn-zone"
                onClick={handleContent}
                className="[&.active]:text-orange-400 active:text-orange-400 p-4 text-xs bg-orange-300 rounded-full [&.active]bg-orange-400 active:bg-orange-500 truncate mx-auto"
              >
                {zo.strArea}
              </h3>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default FilterByZone;
