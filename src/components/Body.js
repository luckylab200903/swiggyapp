import React, { useEffect, useState } from "react";
import Restraurantcard from "./Restraurantcard";
import { IMAGE_URL } from "../utils/images_url";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Body = () => {
  const [listofRestrurants, setlistofRestrurants] = useState([]);
  const [filteredrestrurant, setfilteredrestrurant] = useState([]);
  const [datasearch, setdatasearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        {
          mode: "cors",
        }
      );
      const json = await response.json();
      console.log(json);
      const restrurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log("Restaurants Data:", restrurants);
      setlistofRestrurants(restrurants);
      setfilteredrestrurant(restrurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    console.log("listofRestrurants:", listofRestrurants);
    console.log("filteredrestrurant:", filteredrestrurant);
  }, [listofRestrurants, filteredrestrurant]);
  const handleClick = () => {
    const filteredRestaurants = listofRestrurants.filter(
      (item) => item?.info?.avgRating > 4.2
    );
    setfilteredrestrurant(filteredRestaurants);
  };

  const handleonchange = (e) => {
    setdatasearch(e.target.value);
    console.log(datasearch);
  };

  const handlesearchclick = () => {
    const searchRegex = new RegExp(datasearch, "i");

    const filteredRestaurants = listofRestrurants.filter((restaurant) => {
      return searchRegex.test(restaurant?.info?.name);
    });

    setfilteredrestrurant(filteredRestaurants);
  };

  return filteredrestrurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-center items-center">
        <div className="p-4 text-black flex justify-between">
          <div className="relative flex items-center">
            <Icon
              icon="iconamoon:search-bold"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search restaurants here..."
              className="p-4 pl-10 border hover:border hover:border-black rounded-full focus:outline-none"
              onChange={handleonchange}
            />
          </div>
          <button
            className="bg-gradient-to-b from-green-400 via-white to-black p-4 rounded-full font-bold"
            onClick={handlesearchclick}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-yellow-500 via-purple-500 to-red-500 items-center p-4 rounded-full m-4 font-bold"
          >
            Top Rated restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center mx-auto p-8 py-0  ml-11 mr-11 bg-[#1D267D]">
        {filteredrestrurant.map((restra) => (
          <Link to={"/restaurants/" + restra.info.id} key={restra.info.id}>
            <Restraurantcard
              name={restra.info.name}
              cuisine={restra.info.cuisines.join(" ")}
              avgRating={restra.info.avgRating}
              costForTwo={restra.info.costForTwo}
              DeliveryTime={restra.info.sla.deliveryTime}
              imgUrl={`${IMAGE_URL}${restra.info.cloudinaryImageId}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
