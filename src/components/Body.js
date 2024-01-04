import React, { useEffect, useState } from "react";
import Restraurantcard from "./Restraurantcard";
import { IMAGE_URL } from "../utils/images_url";
import Shimmer from "./Shimmer";
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
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setlistofRestrurants(restrurants);
      setfilteredrestrurant(restrurants)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleClick = () => {
    const filteredRestaurants = listofRestrurants.filter(
      (item) => item?.info?.avgRating > 4.2
    );
    // console.log(listofRestrurants);
    // console.log(filteredRestaurants);
    setfilteredrestrurant(filteredRestaurants);
  };

  const handleonchange = (e) => {
    setdatasearch(e.target.value);
    console.log(datasearch);
  };
  const handlesearchclick = () => {
    const searchRegex = new RegExp(datasearch, "i"); // 'i' flag for case-insensitive search

    const filteredRestaurants = listofRestrurants.filter((restaurant) => {
      return searchRegex.test(restaurant?.info?.name);
    });
    console.log(filteredRestaurants);
    setfilteredrestrurant(filteredRestaurants);
  };
  return (
    <div className="body">
      <div className="filter-button">
        <input
          placeholder="Search restaurants here"
          className="search-input"
          onChange={handleonchange}
        />
        <button className="search-button" onClick={handlesearchclick}>
          Search
        </button>
        <button onClick={handleClick}>Top Rated restaurants</button>
      </div>

      <div className="res-container">
        {filteredrestrurant.length !== 0 ? (
          filteredrestrurant.map((restra) => (
            <Restraurantcard
              key={restra.info.id}
              name={restra.info.name}
              cuisine={restra.info.cuisines.join(" ")}
              avgRating={restra.info.avgRating}
              costForTwo={restra.info.costForTwo}
              DeliveryTime={restra.info.sla.deliveryTime}
              imgUrl={`${IMAGE_URL}${restra.info.cloudinaryImageId}`}
            />
          ))
        ) : (
          <Shimmer />
        )}
      </div>
    </div>
  );
};

export default Body;
