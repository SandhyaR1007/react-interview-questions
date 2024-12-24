import React from "react";

const Square = ({ color }) => {
  console.log(color);
  return <div className={`square ${color === 0 ? "black" : "white"}`}></div>;
};

export default Square;
