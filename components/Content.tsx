/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";

type Props = {};

function Content({}: Props) {
  const [recipe, setRecipe] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
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
  }, []);
  return (
    <div className="mt-20 ml-80 space-y-8 flex flex-col justify-center">
      <h1 className=" text-5xl first-letter:uppercase truncate">{title}</h1>
      <h3 className="italic text-slate-400">{category}</h3>
      <img
        className="w-[500px] h-[300px] rounded-t-2xl hover:scale-110 cursor-pointer"
        src={image}
        alt=""
      />
    </div>
  );
}

export default Content;
