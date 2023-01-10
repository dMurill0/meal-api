/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { BiWorld } from "react-icons/bi";
import { FaSortAmountDownAlt } from "react-icons/fa";
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
    <div className="h-full w-screen bg-orange-300 p-10">
      {recipe && (
        <div className="font-unbounded flex flex-col justify-center items-center space-y-12">
          <h1 className="text-5xl first-letter:uppercase truncate">
            {recipe.strMeal}
          </h1>
          <div className="flex justify-around w-1/2">
            <div className="flex items-center space-x-4">
              <FaSortAmountDownAlt size={30} />
              <h3 className="">{recipe.strCategory}</h3>
            </div>
            <div className="flex items-center space-x-4">
              <BiWorld size={30} />
              <h3 className="">{recipe.strArea}</h3>
            </div>
          </div>

          <p className="w-2/3">{recipe.strInstructions}</p>
          <img
            className="w-[500px] h-[300px] rounded-t-2xl hover:scale-110 cursor-pointer shadow-2xl shadow-orange-800"
            src={recipe.strMealThumb}
            alt=""
          />
          <button
            className="mt-20 px-4 py-2 bg-orange-500 rounded-xl"
            onClick={handleBack}
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
