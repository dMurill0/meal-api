/* eslint-disable @next/next/no-img-element */
import React from "react";
import FilterByType from "../components/FilterByType";
import FilterByZone from "../components/FilterByZone";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useEffect, useState } from "react";

type Props = {};

function Foods({}: Props) {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
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
      <div className="w-7/8 flex bg-orange-200 mx-6 justify-center truncate space-x-4">
        {recipe && recipe.map((rec) => (
            <div key={recipe.idMeal} className="flex flex-col bg-orange-500 p-8 my-4 w-1/5 ">
            <img
              className="w-[500px] h-[300px] mx-auto rounded-2xl cursor-pointer"
              src={recipe.strMealThumb}
              alt=""
            />
            <h1 className="mx-auto text-2xl font-bold uppercase truncate...">
              {recipe.strMeal}
            </h1>
            <div className="flex justify-between">
              <h5>{recipe.strCategory}</h5>
              <h5>{recipe.strArea}</h5>
            </div>
          </div>
        )) 
          }
      </div>
    </div>
  );
}

export default Foods;
