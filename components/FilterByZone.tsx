import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
type Props = {};

function FilterByZone({}: Props) {
  const [zone, setZone] = useState([]);
  const [content, setContent] = useState("");
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => {
        setZone(data.meals);
        console.log(data.meals);
      });
  }, []);

  // function handleContent() {
  //   const contenido = document.getElementById("contenido");
  //   alert(contenido.value);
  // }
  return (
    <div className="flex space-x-2 cursor-pointer truncate">
      <h3>By zone</h3>
      <Swiper
        spaceBetween={0}
        slidesPerView={15}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {zone &&
          zone.map((zo) => (
            <SwiperSlide key={zo.strArea} className="flex">
              <button
                onClick={(e) => {
                  const { target } = e;
                  if (target) {
                    setContent((target as HTMLButtonElement).value);
                    alert(content);
                  }
                }}
                className="p-4 text-xs bg-orange-300 rounded-full [&.active]bg-orange-400 active:bg-orange-500 truncate mx-auto"
              >
                {zo.strArea}
              </button>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default FilterByZone;
