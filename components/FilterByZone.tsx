import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
import {BsFillCaretDownFill} from "react-icons/bs";
type Props = {
  content: string;
  handleContent;
};

function FilterByZone({ content, handleContent }: Props) {
  const [zone, setZone] = useState([]);
  // const [content, setContent] = useState("");
  const currentZone = useRef();
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => {
        setZone(data.meals);
        console.log(data.meals);
      });
  }, []);

function handleDropZone(){
  let drop = document.getElementById("drop-zone");
  if (drop.style.display === "none")
  drop.style.display = "block";
  else drop.style.display = "none";
}


  // function handleContent(e: any) {
  //   const { target } = e;
  //   let btn = document.getElementById("btn-zone");
  //   currentZone.current = target;
  //   setContent(target.innerText);

  // }

  return (
    <div className="flex space-x-2 cursor-pointer truncate">
      <div>
      <div className="flex items-center space-x-4">
        <button className="flex items-center" onClick={handleDropZone}>By zone <BsFillCaretDownFill className="animate-bounce"/></button>
        </div>
        <div className="overflow-y-scroll space-y-2 bg-orange-300 h-[300px] rounded-lg hidden" id="drop-zone">
          {zone &&
            zone.map((zo) => (
              <h3
                key={zo["strArea"]}
                id="btn-type"
                onClick={handleContent}
                className="p-2 text-xs bg-orange-300  focus:bg-orange-400 [&.active]bg-orange-400 active:bg-orange-500 truncate... "
              >
                {zo["strArea"]}
              </h3>
            ))}
        </div>
      </div>
    </div>
  );
}

export default FilterByZone;
