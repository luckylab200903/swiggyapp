import React, { useEffect, useState } from "react";
import Restraurantcard from "./Restraurantcard";
import { IMAGE_URL } from "../utils/images_url";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

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
