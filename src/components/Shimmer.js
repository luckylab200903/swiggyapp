// Shimmer.jsx

import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center p-8">
      {[...Array(15)].map((_, index) => (
        <div key={index} className="shimmer-box m-4"></div>
      ))}
    </div>
  );
};

export default Shimmer;
