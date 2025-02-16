import React from "react";
import useImageSlider from "../hooks/useImageSlider";
import useTouchSlider from "../hooks/useTouchSlider";

const ImageSlider = ({ id, images, interval = 3000 }) => {
  const { currentIndex, nextSlide, prevSlide } = useImageSlider(images, interval);
  const { handleTouchStart, handleTouchEnd } = useTouchSlider(nextSlide, prevSlide);

  return (
    <section id={id} className="w-full flex items-center justify-center bg-black overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="relative w-full h-auto flex justify-center items-center">
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full object-cover flex-shrink-0" />
          ))}
        </div>
        <div className="absolute bottom-6 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-black bg-opacity-50 px-3 py-1 rounded-full">
          {images.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white scale-125" : "bg-gray-400"}`} />
          ))}
        </div>
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition" onClick={prevSlide}>
        ❮
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition" onClick={nextSlide}>
        ❯
      </button>
    </section>
  );
};

export default ImageSlider;
