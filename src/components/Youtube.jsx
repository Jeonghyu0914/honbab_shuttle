import React from "react";
import useWindowSize from "../hooks/useWindowSize";

const Youtube = ({ id, src, baseTop, left, className }) => {
  const { width, height } = useWindowSize();
  const baseWidth = 550; // 기준 너비 (기준 창 너비를 550px로 가정)

  const dynamicTop = (width / baseWidth) * baseTop; // 비율에 맞춰 top 조정
  return (
    <>
      <iframe
        id={id}
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`${className} rounded-2xl aspect-video shadow-xl`}
        style={{
          top: `${dynamicTop}px`, // 창 너비에 따라 자동 조정
          left: `${left}%`,
          transform: "translateX(-50%)", // 중앙 정렬
        }}
      />
    </>
  );
};

export default Youtube;
