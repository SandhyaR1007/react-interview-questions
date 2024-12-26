import React from "react";

import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/helper";

const Bishop = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PIECE,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <span
      className="square piece"
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      ♝
    </span>
  );
};

export default Bishop;
