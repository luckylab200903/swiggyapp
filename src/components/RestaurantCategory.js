import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show, setShowIndex }) => {
  //console.log(data);

 // const [show, setshow] = useState(true);
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div className="">
      <div
        className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-2 space-x-2 cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span className="cursor-pointer">⬇️</span>
        </div>
        {show ? <ItemList items={data.itemCards} /> : <></>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
