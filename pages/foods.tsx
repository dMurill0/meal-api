/* eslint-disable @next/next/no-img-element */
import React, { useRef } from "react";
import FilterByType from "../components/FilterByType";
import FilterByZone from "../components/FilterByZone";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Thumbs } from "swiper";
import Link from "next/link";
import { useRouter } from "next/router";
import { GoSearch } from "react-icons/go";

type Props = {};

function Foods({}: Props) {
  const [recipe, setRecipe] = useState([]);
  const [receta, setReceta] = useState([]);
  const [type, setType] = useState("");
  const [zone, setZone] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [content, setContent] = useState("");
  const [tipo, setTipo] = useState("");

  const router = useRouter();
  const currentZone = useRef();

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals);
        console.log(data.meals);
      });
  }, []);

  function handleContent(e) {
    const { target } = e;
    let btn = document.getElementById("btn-zone");
    setContent(target.innerText);
    currentZone.current = target;
    alert(target.innerText);
  }

  function handleType(e) {
    const { target } = e;
    let btn = document.getElementById("btn-type");
    setTipo(target.innerText);
    alert(target.innerText);
  }
  function handleRandom() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        setReceta(data.meals[0]);
        console.log("caca", data.meals[0]);

        let name = data.meals[0].strMeal;
        setTitle(name);
        let thumb = data.meals[0].strMealThumb;
        setImage(thumb);
        let cate = data.meals[0].strCategory;
        setCategory(cate);
        router.push(`search/${data.meals[0].idMeal}`);
      });
  }

  return (
    <div className="h-full w-screen bg-orange-400 flex-col justify-center pt-12 space-y-6 font-unbounded pl-8">
      <Link href={"/"}>
        <img
          src="/images/image4.png"
          alt=""
          className="absolute w-[150px] right-20 top-4"
        />
      </Link>
      <h1 className="text-6xl pl-20 uppercase">Popular foods</h1>
      <div className="flex justify-center items-center mt-8  space-x-6">
        <input
          className="bg-orange-300 text-slate-500 w-1/3 rounded-lg shadow-sm focus:ring-1 focus:ring-orange-500  border-b-4 focus:border-orange-500 focus:outline-dotted hover:border-orange-300 border-orange-100 "
          type="search"
          placeholder="Search a meal"
          id="input-srch"
        />
        <button id="search-btn">
          <GoSearch size={30} />
        </button>
      </div>
      <FilterByZone />
      <FilterByType />
      <div className="flex space-x-8 items-center">
        <h3>Random Meal </h3>
        <h2>{title}</h2>

        <GiPerspectiveDiceSixFacesRandom
          size={80}
          className="w-[40px] cursor-pointer"
          onClick={handleRandom}
        />
      </div>
      <h1>
        {content} {tipo}
      </h1>
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
                <Link href={`search/${rec.idMeal}`}>
                  <img
                    className="w-full h-[300px] mx-auto rounded-2xl cursor-pointer"
                    src={rec.strMealThumb}
                    alt=""
                  />
                  <h1 className="mx-auto texxt-xl font-bold uppercase truncate...">
                    {rec.strMeal}
                  </h1>
                </Link>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Foods;
