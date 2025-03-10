import React from "react";
import useWindowSize from "../hooks/useWindowSize";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Element = ({ id, image, baseTop, left, className, enableAnimation = true }) => {
  const { isVisible, elementRef } = useIntersectionObserver(0.5); // 50% 이상 보일 때 감지

  const { width, height } = useWindowSize();
  const baseWidth = 550; // 기준 너비 (기준 창 너비를 550px로 가정)

  const dynamicTop = (width / baseWidth) * baseTop; // 비율에 맞춰 top 조정
  return (
    <>
      <img
        id={id}
        ref={elementRef}
        src={image}
        className={`${className} ${enableAnimation ? "transition-all duration-700 ease-out" : ""} ${enableAnimation ? (isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10") : ""}`}
        style={{
          top: `${dynamicTop}px`, // 창 너비에 따라 자동 조정
          left: `${left}%`,
          transform: "translateX(-50%)", // 중앙 정렬
        }}
      />
    </>
  );
};

export default Element;
