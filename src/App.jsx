import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";
import mainImg from "../public/mainBackground.png";
import logo from "../public/logo.jpeg";
import black from "../public/black.png";

// Main App Component
const App = () => {
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
      <main className="flex-grow -mt-20">
        <MainPage id="main" image={mainImg} />
      </main>
      <Footer id="footer" />
    </div>
  );
};

export default App;
