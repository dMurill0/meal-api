/* eslint-disable @next/next/no-img-element */
import React from "react";
import FilterByType from "../components/FilterByType";
import FilterByZone from "../components/FilterByZone";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type Props = {};

function Foods({}: Props) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals);
        console.log(data.meals);
      });
  }, []);

  return (
    <div className="h-screen w-screen bg-orange-400 flex-col justify-center pt-12 space-y-6 font-unbounded pl-8">
      <h1 className="text-6xl pl-20 ">Popular foods</h1>
      <FilterByZone />
      <FilterByType />
      <div className="flex space-x-8 items-center">
        <h3>Random Meal </h3>
        <GiPerspectiveDiceSixFacesRandom
          size={80}
          className="w-[40px] cursor-pointer"
        />
      </div>
      <div className="w-7/8 flex mx-6 justify-center truncate space-x-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {recipe &&
            recipe.map((rec) => (
              <SwiperSlide
                key={rec.idMeal}
                className="flex flex-col bg-orange-500 p-8 my-4 "
              >
                <img
                  className="w-[300px] h-[300px] mx-auto rounded-2xl cursor-pointer"
                  src={rec.strMealThumb}
                  alt=""
                />
                <h1 className="mx-auto text-xl font-bold uppercase truncate...">
                  {rec.strMeal}
                </h1>
                <div className="flex justify-between">
                  <h5>{rec.strCategory}</h5>
                  <h5>{rec.strArea}</h5>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <script src="../path/to/flowbite/dist/flowbite.js"></script>
    </div>
  );
}

export default Foods;
