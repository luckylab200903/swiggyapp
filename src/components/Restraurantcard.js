import React, { useEffect } from "react";

const Restraurantcard = ({name,cuisine,avgRating,costForTwo,DeliveryTime,imgUrl}) => {
  const style = {
    backgroundColor: "#f0f0f0",
  };
 
  return (
    <div className="res-card" style={style}>
      <img
        className="cardlogo"
        src={imgUrl}
      />
      <h3>{name}</h3>
      <h3>{cuisine}</h3>
      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>{DeliveryTime}</h3>
    </div>
  );
};

export default Restraurantcard;
