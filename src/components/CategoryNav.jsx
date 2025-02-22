import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import { menuList, sideMenuList } from "../assets/menuList.js";
import MenuGrid from "./MenuGrid.jsx";
import SideMenuGrid from "./SideMenuGrid.jsx";

// Category Navigation Component
const CategoryNav = ({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const { width } = useWindowSize();
  const baseWidth = 550;
  const baseTop = 2975;
  const dynamicTop = (width / baseWidth) * baseTop;

  return (
    <div
      id={id}
      className="absolute w-full flex flex-col justify-center items-center py-5 bg-white"
      style={{
        top: `${dynamicTop}px`,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* 제목 */}
      <div className="flex justify-center items-center pt-7 pb-3">
        <h1 className="text-4xl text-center text-black">MENU</h1>
      </div>
      <div className="flex justify-center items-center pb-6">
        <p className="text-yellow-500 text-lg">"다양한 한식 메뉴로 모든 고객을 사로잡는 혼밥셔틀"</p>
      </div>

      {/* 카테고리 선택 버튼 */}
      <div className="flex justify-center items-center w-full max-w-screen-lg mx-auto">
        <div className="flex flex-wrap justify-center gap-2 w-full px-4 py-2 bg-gray-200 rounded-lg">
          {["찌개", "옛날 도시락", "정찬 도시락", "덮밥", "짜글이", "비빔밥", "고기만찬", "볶음밥", "사이드"].map((category, index) => (
            <button key={index} className={`h-7 text-base px-4 rounded-full transition-all ${selectedCategory && selectedCategory[1] === index ? "bg-orange-500 text-white" : "bg-white text-black hover:bg-orange-500 hover:text-white"}`} onClick={() => setSelectedCategory([category, index])}>
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 선택된 카테고리 표시 */}
      <div className="mt-3 w-full">{selectedCategory && (selectedCategory[1] === 8 ? <SideMenuGrid id="사이드" menuItems={sideMenuList} /> : <MenuGrid id={selectedCategory[0]} menuItems={menuList[selectedCategory[1]]} />)}</div>
    </div>
  );
};

export default CategoryNav;
