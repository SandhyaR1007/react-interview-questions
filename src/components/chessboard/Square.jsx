import React from "react";

const Square = ({ color, outerPos, innerPos, ele, hoveredStates }) => {
  const isHovered = hoveredStates?.find(
    (ele) => ele.outerPos === outerPos && ele.innerPos == innerPos
  );
  return (
    <div
      className={`square ${color === 0 ? "darkBg" : "lightBg"} ${
        isHovered ? "hoveredBg" : ""
      }`}
      data-innerpos={innerPos}
    >
      {ele}
    </div>
  );
};

export default Square;
