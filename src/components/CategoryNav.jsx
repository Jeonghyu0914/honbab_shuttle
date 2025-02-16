import React from "react";
import smoothScroll from "../utils/smoothScroll.js"; // 스크롤 함수 분리

// Category Navigation Component
const CategoryNav = ({ id }) => {
  return (
    <div id={id}>
      <div className="flex justify-center item-center bg-black pt-10 pb-5">
        <h1 className="text-6xl text-center">메뉴</h1>
      </div>
      <div className="flex justify-center item-center bg-black pb-10">
        <p className="text-yellow-500 text-xl">"다양한 한식 메뉴로 모든 고객을 사로잡는 혼밥셔틀"</p>
      </div>
      <div className="flex justify-center items-center bg-black">
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-lg w-full px-4">
          {["찌개", "옛날 도시락", "정찬 도시락", "덮밥", "짜글이", "비빔밥", "고기만찬", "볶음밥", "사이드"].map((category, index) => (
            <a href={`#${category}`} key={index} className="border border-white text-white py-2 px-4 rounded-full cursor-pointer hover:bg-white hover:text-black transition-all cursor-default hover:cursor-pointer" onClick={(e) => smoothScroll(e, category)}>
              {category}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
