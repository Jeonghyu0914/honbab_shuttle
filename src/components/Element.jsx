import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const Element = ({ image, baseTop, left, className }) => {
  const { width, height } = useWindowSize();
  const baseWidth = 550; // 기준 너비 (기준 창 너비를 550px로 가정)

  const dynamicTop = (width / baseWidth) * baseTop; // 비율에 맞춰 top 조정
  return (
    <>
      <img
        src={image}
        className={className}
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
