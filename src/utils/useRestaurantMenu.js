import React, { useEffect, useState } from "react";
import { MENU_URL } from "./images_url";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState([]);
  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    setresInfo(json.data);
    console.log(json);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return resInfo;
};

export default useRestaurantMenu;

