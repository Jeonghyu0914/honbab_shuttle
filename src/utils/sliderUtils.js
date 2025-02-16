export const getNextSlide = (currentIndex, length) => {
  return (currentIndex + 1) % length;
};

export const getPrevSlide = (currentIndex, length) => {
  return currentIndex === 0 ? length - 1 : currentIndex - 1;
};
