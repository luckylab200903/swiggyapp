import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL,REMAINING_URL } from "../utils/images_url";
const RestaurantMenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MENU_URL+resId);

      const json = await data.json();
      setresinfo(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
  console.log(itemCards);


  return (
    <div>
      <h1>{name}:</h1>
      <h2>{cuisines.join(",")}</h2>
      <h2>{costForTwo}</h2>
      <h2>{city}</h2>
      <div>
        <h2>Recommended</h2>
        <ul>
          {itemCards && itemCards.map((item) => (
            <li key={item.card.id}>
              {item.card.info.name}:₹{item.card.info.price / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
