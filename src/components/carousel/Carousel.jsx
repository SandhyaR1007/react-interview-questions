import React, { useState } from "react";

const Carousel = ({ images, imgLimit, imagePerSlide, isLoading }) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(0);
  if (isLoading) return <h2>Loading...</h2>;
  const handleNext = () => {
    setCurrentImage((currentImage) => currentImage + 1);
  };
  return (
    <div>
      <button>Prev</button>
      <div>
        {images[currentImage] && (
          <img
            src={images[currentImage].url}
            alt={images[currentImage].title}
            style={{
              height: 300,
              width: 300,
            }}
          />
        )}
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
