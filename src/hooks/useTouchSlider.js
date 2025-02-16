import { useState, useEffect } from "react";
import { getNextSlide, getPrevSlide } from "../utils/sliderUtils";

const useImageSlider = (images, interval = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => getNextSlide(prevIndex, images.length));
    }, interval);

    return () => clearInterval(sliderInterval);
  }, [currentIndex, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => getNextSlide(prevIndex, images.length));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => getPrevSlide(prevIndex, images.length));
  };

  return { currentIndex, nextSlide, prevSlide };
};

export default useImageSlider;
