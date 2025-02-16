import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import CategoryNav from "./components/CategoryNav.jsx";
import MenuGrid from "./components/MenuGrid.jsx";
import SideMenuGrid from "./components/SideMenuPage.jsx";
import Footer from "./components/Footer.jsx";
import StickyMenu from "./components/StickyMenu.jsx";
import ImageSlider from "./components/ImageSlider.jsx";
import { menuList, sideMenuList } from "./assets/menuList.js";
import mainImg from "../public/main.png";
import mainImg1 from "./assets/002.png";
import mainImg2 from "./assets/003.png";
import mainImg3 from "./assets/004.png";
import mainImg4 from "./assets/005.png";
import mainImg5 from "./assets/006.png";
import mainImg6 from "./assets/009.png";
import logo from "../public/logo.jpeg";
import black from "../public/black.png";

// Main App Component
const App = () => {
  const images = [mainImg1, mainImg2, mainImg3]; // 실제 이미지 경로로 변경

  const [isTransparent, setIsTransparent] = useState(true);
  useEffect(() => {
    // 스크롤 이벤트 핸들러
    const handleScroll = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup 함수 (컴포넌트 언마운트 시 이벤트 제거)
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="html" className="scroll-smooth text-white min-h-screen flex flex-col">
      <Header isTransparent={isTransparent} />
      <StickyMenu />
      <main className="flex-grow -mt-20">
        <MainPage id="main1" image={mainImg} />
        {/* <MainPage id="main2" image={mainImg2} />
         <MainPage id="main3" image={mainImg3} />
        <MainPage id="main4" image={mainImg4} />
        <MainPage id="main5" image={mainImg5} />
        <MainPage id="main6" image={mainImg6} /> */}
        <CategoryNav id="CategoryNav" />
        <MenuGrid id="찌개" menuItems={menuList[0]} />
        <MenuGrid id="옛날 도시락" menuItems={menuList[1]} />
        <MenuGrid id="정찬 도시락" menuItems={menuList[2]} />
        <MenuGrid id="덮밥" menuItems={menuList[3]} />
        <MenuGrid id="짜글이" menuItems={menuList[4]} />
        <MenuGrid id="비빔밥" menuItems={menuList[5]} />
        <MenuGrid id="고기만찬" menuItems={menuList[6]} />
        <MenuGrid id="볶음밥" menuItems={menuList[7]} />
        <SideMenuGrid id="사이드" menuItems={sideMenuList} />
        <MainPage id="temp" image={black} />
      </main>
      <Footer id="footer" />
    </div>
  );
};

export default App;
