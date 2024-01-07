import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL, REMAINING_URL } from "../utils/images_url";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resinfo = useRestaurantMenu(resId);
  if (!resinfo) {
    return <Shimmer />;
  }
  console.log(resinfo);
  const { cards } = resinfo;

  if (
    !cards ||
    !cards[0] ||
    !cards[0].card ||
    !cards[0].card.card ||
    !cards[0].card.card.info
  ) {
    return <Shimmer />;
  }

  const { cuisines, name, costForTwo, city } = cards[0].card.card.info;
  const { itemCards } =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  return (
    <div className="items-center text-center bg-[#D4ADFC]">
      <div className="gap-2 pt-4">
        <h1 className="font-bold text-3xl">{name}</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 text-center font-bold">
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwo / 100} for two</h2>
        <h2>{city}</h2>
      </div>
      <div>
        {categories.map((category,index) => {
          return (
            <RestaurantCategory
              data={category?.card?.card}
              show={index===showIndex ? true : false}
              setShowIndex={()=>setShowIndex(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
