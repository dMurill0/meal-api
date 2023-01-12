import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
type Props = {
  tipo: string,
  handleType
};

function FilterByType({tipo,handleType}: Props) {
  const [type, setType] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => {
        setType(data.meals);
        console.log(data.meals);
      });
  }, []);

  return (
    <div className="flex space-x-8 cursor-pointer truncate...">
      <h3>By type</h3>
      <Swiper
        spaceBetween={5}
        slidesPerView={14}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {type &&
          type.map((ty) => (
            <SwiperSlide key={ty["strCategory"]} className="flex">
              <h3
                id="btn-type"
                onClick={handleType}
                className="p-4 text-xs bg-orange-300 rounded-full focus:bg-orange-400 [&.active]bg-orange-400 active:bg-orange-500 truncate"
              >
                {ty["strCategory"]}
              </h3>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default FilterByType;
