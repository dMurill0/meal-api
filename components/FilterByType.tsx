import React from "react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
import "swiper/css";
import {BsFillCaretDownFill} from "react-icons/bs";
type Props = {
  tipo: string;
  handleType;
};

function FilterByType({ tipo, handleType }: Props) {
  const [type, setType] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
      .then((res) => res.json())
      .then((data) => {
        setType(data.meals);
        console.log(data.meals);
      });
  }, []);

  function handleDropType(){
    let dropT = document.getElementById("drop-type");
    if (dropT.style.display === "none")
    dropT.style.display = "block";
    else dropT.style.display = "none";
  }

  return (
    <div className="flex space-x-2  cursor-pointer truncate...">
      <div>
        <div className="flex items-center space-x-4">
        <button className="flex items-center" onClick={handleDropType}>By type <BsFillCaretDownFill className="animate-bounce"/></button>
        </div>
        
        <div className="overflow-y-scroll space-y-2 bg-orange-300 h-[300px] rounded-lg hidden" id="drop-type">
          {type &&
            type.map((ty) => (
              <h3
                key={ty["strCategory"]}
                id="btn-type"
                onClick={handleType}
                className="p-2 text-xs bg-orange-300  focus:bg-orange-400 [&.active]bg-orange-400 active:bg-orange-500 truncate... "
              >
                {ty["strCategory"]}
              </h3>
            ))}
        </div>
      </div>
   
    </div>
  );
}

export default FilterByType;
