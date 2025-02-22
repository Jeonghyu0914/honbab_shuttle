import React, { useEffect, useState, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";

const Review = ({ image }) => {
  return <img src={image} className="w-3/7 h-auto object-cover rounded-lg shadow-2xl" />;
};

const ReviewGrid = ({ baseTop, left, no }) => {
  const { width } = useWindowSize();
  const baseWidth = 550; // 기준 너비 (기준 창 너비를 550px로 가정)
  const dynamicTop = (width / baseWidth) * baseTop; // 비율에 맞춰 top 조정
  const elementRef = useRef(null);
  const [hasMoved, setHasMoved] = useState(false); // 이동 후 상태 유지

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasMoved) {
          setHasMoved(true); // 이동 후 상태 유지
          observer.unobserve(entry.target); // 감지된 후 다시 감지하지 않도록 설정
        }
      },
      { threshold: 0 } // 30% 이상 보이면 트리거
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasMoved]); // hasMoved가 변경될 때만 실행됨

  return (
    <div
      ref={elementRef}
      style={{
        top: `${dynamicTop}px`, // 창 너비에 따라 자동 조정
        left: `${left}%`, // 왼쪽 이동이면 기존 방식 유지
        transform: `translateX(${hasMoved ? -1000 : 0}px)`, // ✅ 방향에 따라 이동
        transition: `transform ${no == 0 ? "15s" : "10s"} ease-out`, // 부드러운 애니메이션
      }}
      className="absolute flex space-x-4"
    >
      {[...(no == 0 ? Array.from({ length: 12 }, (_, i) => `${i + 1}.jpg`) : Array.from({ length: 11 }, (_, i) => `${i + 13}.jpg`))].map((img, index) => (
        <Review key={index} image={img} />
      ))}
    </div>
  );
};

export default ReviewGrid;
