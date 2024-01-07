import React from "react";
import { IMAGE_URL } from "../utils/images_url";

const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div
            className="p-2 m-2 border-b-2 text-left flex justify-between"
            key={item.card.info.id}
          >
            <div className="p-2 flex flex-col w-9/12">
              <div className="font-bold">
                <span>{item.card.info.name}</span>
                <span>
                  -₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>

              <p className="text-xs font-bold">{item.card.info.description}</p>
            </div>
            <div className="p-2 flex flex-col justify-end items-center w-3/12 relative">
              <img
                src={
                  item.card.info.imageId
                    ? `${IMAGE_URL}${item.card.info.imageId}`
                    : "https://media.istockphoto.com/id/1141250445/photo/top-view-composition-of-various-asian-food-in-bowl.webp?b=1&s=170667a&w=0&k=20&c=0J0fxWfdyTDN_h9CheNsoVrQwK9K8BlX8HneEGxPPwE="
                }
                className="w-24 h-auto mb-2 object-cover" // Increase width for better visibility, use object-cover to maintain aspect ratio
                alt={item.card.info.name}
              />
              <button className="p-2 bg-white shadow-lg absolute bottom-0 rounded-lg">
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
