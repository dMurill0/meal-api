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

  function handleContent(
    event: Event & {
      target: HTMLButtonElement;
    }
  ) {
    const { target } = event;
    let btn = document.getElementById("btn-zone");
    alert(btn?.nodeValue);
    setContent(target.value);
    // alert(content);
  }

  return (
    <div className="flex space-x-2 cursor-pointer truncate">
      <h1>{content}</h1>
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
              <button
                id="btn-zone"
                onClick={handleContent}
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
