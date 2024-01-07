import React from "react";

const RestaurantCard = ({
  name,
  cuisine,
  avgRating,
  costForTwo,
  DeliveryTime,
  imgUrl,
}) => {
  return (
    <div className="w-56 p-4 m-4 h-[450px] bg-[#D4ADFC] rounded-md shadow-md shadow-lg transition-transform transform hover:scale-105 hover:border hover:border-solid hover:border-black">
      <img
        className="w-full h-36 object-cover rounded-md mb-4"
        src={imgUrl}
        alt={name}
      />
      <div className="flex flex-col items-center justify-center font-bold">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-1">{cuisine}</p>
        <p className="text-yellow-500 mb-1">Rating: {avgRating}</p>
        <p className="text-gray-700 mb-1">Cost for Two: {costForTwo}</p>
        <p className="text-gray-700">Delivery Time: {DeliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
