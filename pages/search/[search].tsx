/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiTime, BiWorld } from "react-icons/bi";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { GrSort } from "react-icons/gr";
import Link from "next/link";
type Props = {};

function Search({}: Props) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const query = router.query.Search;
  const [q, setQ] = useState("");

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    console.log(query);
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        let name = data.meals[0].strMeal;
        setTitle(name);
        let thumb = data.meals[0].strMealThumb;
        setImage(thumb);
        let cate = data.meals[0].strCategory;
        setCategory(cate);
        console.log(data.meals[0]);
      });
  }, [query]);

  function handleBack() {
    router.back();
  }

  return (
    <div className="h-full w-screen bg-orange-300">
      <div className="flex items-center ml-8">
        <GrSort size={30} />
        <h1 className="text-2xl p-8 text-[#2E0F0F] font-semibold font-unbounded">
          Recipes.
        </h1>
        <Link href={"/"}>
          <img
            src="/images/image4.png"
            className="absolute top-5 right-20 h-[100px]"
            alt=""
          />
        </Link>
      </div>

      {recipe.length && (
        <div className="font-unbounded flex justify-center items-start   p-10 ">
          <div className="w-3/4 h-full space-y-12 flex-col">
            <h3 className="text-orange-600 uppercase">{recipe["strCategory"]}</h3>
            <h1 className="text-5xl first-letter:uppercase font-bold text-[#A33410] truncate">
              {recipe["strMeal"]}
            </h1>

            <h3 className="">{recipe["strArea"]}</h3>

            <p className="w-2/3 first-letter:ml-40 p-4 bg-orange-200 rounded-md">
              {recipe.strInstructions}
            </p>
            <div className="flex-col justify-center items-center">
              <img
                className="absolute top-60 right-1/4 rounded-full w-[400px] h-[400px]  shadow-2xl shadow-orange-800"
                src={recipe.strMealThumb}
                alt=""
              />
              {/* <h3>
                {recipe.strTags}
              </h3> */}
            </div>
            <button
              className="mt-20 px-4 py-2 m-60 bg-orange-500 rounded-xl"
              onClick={handleBack}
            >
              Back
            </button>
          </div>
          <div className="w-1/4  bg-orange-100 rounded-xl m-2 flex-col  ">
            <div className="info flex justify-center items-center pb-8">
              <div className="flex-col m-2 pt-10 space-y-10 text-slate-400">
                <BiTime size={40} />
                <AiOutlineThunderbolt size={40} />
                <SlBadge size={40} />
              </div>
              <div className="flex-col m-2 pt-11 space-y-16">
                <h1>20 minutes</h1>
                <h1>630 calories</h1>
                <h1>Beginner</h1>
              </div>
            </div>
            <div className="ingredients p-8 flex-col justify-center items-center ml-8">
              <h1 className="text-2xl font-semibold text-[#A33410] ml-14">
                Ingredients
              </h1>
              <ul className="flex-col pt-8 items-center space-y-10 ml-14">
                <li>{recipe.strIngredient1}</li>
                <li>{recipe.strIngredient2}</li>
                <li>{recipe.strIngredient3}</li>
                <li>{recipe.strIngredient4}</li>
                <li>{recipe.strIngredient5}</li>
                <li>{recipe.strIngredient6}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
