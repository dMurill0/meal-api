/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Props = {};

function Content({}: Props) {
  const [recipe, setRecipe] = useState([]);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState([]);
  const router = useRouter();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
        let number = data.meals[0].idMeal;
        setId(number);
        let name = data.meals[0].strMeal;
        setTitle(name);
        let thumb = data.meals[0].strMealThumb;
        setImage(thumb);
        let cate = data.meals[0].strCategory;
        setCategory(cate);
        console.log(data.meals[0]);
      });
  }, []);
  function handleOpen() {
    router.push(`search/${id}`);
  }
  return (
    <div className="mt-20 ml-80 ">
      <button onClick={handleOpen} className="space-y-4 flex flex-col justify-center">
        <h1 className=" text-5xl first-letter:uppercase truncate">{title}</h1>
        <h3 className="italic text-slate-400">{category}</h3>
        <img
          className="w-[500px] h-[300px] rounded-t-2xl hover:scale-110 shadow-2xl shadow-orange-800"
          src={image}
          alt=""
        />
      </button>
    </div>
  );
}

export default Content;
