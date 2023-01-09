/* eslint-disable @next/next/no-img-element */
import React from "react";
import FilterByType from "../components/FilterByType";
import FilterByZone from "../components/FilterByZone";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs } from "swiper";
import Link from "next/link";

type Props = {};

function Foods({}: Props) {
  const [recipe, setRecipe] = useState([]);
  const [type, setType] = useState("");
  const [zone, setZone] = useState("");
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals);
        console.log(data.meals);
      });
  }, []);

  // function handleRandom() {
  //   useEffect(() => {
  //     fetch("https://www.themealdb.com/api/json/v1/1/random.php")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setRecipe(data.meals[0]);
  //       });
  //   }, []);
  // }

  return (
    <div className="h-screen w-screen bg-orange-400 flex-col justify-center pt-12 space-y-6 font-unbounded pl-8">
      <Link href={"/"}>
        <img
          src="/images/image4.png"
          alt=""
          className="absolute w-[150px] right-20 top-4"
        />
      </Link>
      <h1 className="text-6xl pl-20 uppercase">Popular foods</h1>
      <FilterByZone/>
      <FilterByType />
      <div className="flex space-x-8 items-center">
        <h3>Random Meal </h3>
        <GiPerspectiveDiceSixFacesRandom
          size={80}
          className="w-[40px] cursor-pointer"
          // onClick={handleRandom}
        />
      </div>
      <div className="w-7/8 flex mx-6 justify-center truncate space-x-4 ">
        <Swiper
          modules={[Thumbs]}
          watchSlidesProgress
          onSwiper={setThumbsSwiper}
          spaceBetween={40}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {recipe &&
            recipe.map((rec) => (
              <SwiperSlide
                key={rec.idMeal}
                className="flex flex-col bg-orange-500 p-8 my-4 space-y-2"
              >
                <img
                  className="w-full h-[300px] mx-auto rounded-2xl cursor-pointer"
                  src={rec.strMealThumb}
                  alt=""
                />
                <h1 className="mx-auto texxt-xl font-bold uppercase truncate...">
                  {rec.strMeal}
                </h1>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Foods;
