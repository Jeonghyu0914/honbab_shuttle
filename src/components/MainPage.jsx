import React from "react";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const MainPage = ({ id, image }) => {
  const { isVisible, elementRef } = useIntersectionObserver();

  return (
    <section id={id} ref={elementRef} className="w-full flex items-center justify-center bg-black">
      <div className="w-full h-auto flex justify-center items-center">
        <img
          src={image}
          alt="메인 이미지"
          className={`w-full object-cover transition-all duration-1000 ease-out 
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        />
      </div>
    </section>
  );
};

export default MainPage;
